import { useEffect, useRef, useState } from "react";
import type { ProjectMedia } from "../data/projects";
import styles from "./ProjectMediaCarousel.module.css";

const SLIDE_MS = 420;

type ProjectMediaCarouselProps = {
  media: ProjectMedia[];
  projectTitle: string;
};

function Caret({ direction }: { direction: "prev" | "next" }) {
  return (
    <svg
      className={styles.caretIcon}
      viewBox="0 0 24 24"
      width="20"
      height="20"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {direction === "prev" ? (
        <polyline points="15 5 8 12 15 19" />
      ) : (
        <polyline points="9 5 16 12 9 19" />
      )}
    </svg>
  );
}

function Slide({
  item,
  projectTitle,
  active,
}: {
  item: ProjectMedia;
  projectTitle: string;
  active: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (active) {
      const play = video.play();
      if (play) play.catch(() => {});
    } else {
      video.pause();
    }
  }, [active]);

  if (item.type === "image") {
    return (
      <img
        className={styles.media}
        src={item.src}
        alt={item.alt ?? projectTitle}
      />
    );
  }

  return (
    <video
      ref={videoRef}
      className={styles.media}
      src={item.src}
      muted
      loop
      playsInline
      autoPlay={active}
      aria-label={`${projectTitle} walkthrough`}
    />
  );
}

export default function ProjectMediaCarousel({
  media,
  projectTitle,
}: ProjectMediaCarouselProps) {
  const [index, setIndex] = useState(0);
  const [outgoingIndex, setOutgoingIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const current = media[index];
  const isSliding = outgoingIndex !== null;

  const goTo = (nextIndex: number, nextDirection: "next" | "prev") => {
    const wrapped = (nextIndex + media.length) % media.length;
    if (wrapped === index || isSliding) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIndex(wrapped);
      return;
    }

    setDirection(nextDirection);
    setOutgoingIndex(index);
    setIndex(wrapped);
  };

  useEffect(() => {
    if (outgoingIndex === null) return;

    const timeout = window.setTimeout(() => {
      setOutgoingIndex(null);
    }, SLIDE_MS);

    return () => window.clearTimeout(timeout);
  }, [outgoingIndex]);

  if (media.length === 0 || !current) return null;

  const enterClass =
    direction === "next" ? styles.enterNext : styles.enterPrev;
  const exitClass = direction === "next" ? styles.exitNext : styles.exitPrev;

  return (
    <div className={styles.carousel}>
      <div className={styles.frame}>
        {isSliding && media[outgoingIndex] && (
          <div className={`${styles.slide} ${exitClass}`}>
            <Slide
              item={media[outgoingIndex]}
              projectTitle={projectTitle}
              active={false}
            />
          </div>
        )}
        <div className={`${styles.slide} ${isSliding ? enterClass : ""}`}>
          <Slide item={current} projectTitle={projectTitle} active />
        </div>

        {media.length > 1 && (
          <>
            <button
              type="button"
              className={`${styles.caret} ${styles.caretPrev}`}
              onClick={() => goTo(index - 1, "prev")}
              aria-label="Previous media"
            >
              <Caret direction="prev" />
            </button>
            <button
              type="button"
              className={`${styles.caret} ${styles.caretNext}`}
              onClick={() => goTo(index + 1, "next")}
              aria-label="Next media"
            >
              <Caret direction="next" />
            </button>
          </>
        )}
      </div>

      {media.length > 1 && (
        <div className={styles.dots}>
          {media.map((item, itemIndex) => (
            <button
              key={item.src}
              type="button"
              className={`${styles.dot} ${itemIndex === index ? styles.dotActive : ""}`}
              onClick={() =>
                goTo(itemIndex, itemIndex > index ? "next" : "prev")
              }
              aria-label={`Show media ${itemIndex + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
