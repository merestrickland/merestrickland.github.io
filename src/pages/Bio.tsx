import styles from "./Bio.module.css";

export default function Bio() {
  return (
    <article className={styles.bio}>
      <img
        className={styles.photo}
        src="/images/meredith.jpg"
        alt="Meredith Strickland"
        width={1200}
        height={1600}
      />
      <div className={styles.copy}>
        <h1 className={styles.heading}>Hi, I&apos;m Meredith.</h1>
        <p>
          I'm a frontend engineer with six years of experience, working
          primarily in React, Next.js, TypeScript, Tailwind, and Node. Before
          going through a fullstack coding bootcamp in 2019, I spent eight years
          in architecture, where I learned to hold a high standard for quality,
          from the big picture down to the smallest details. That's the standard
          I bring as a developer, whether I'm thinking through a system or
          polishing something a user might never consciously notice but would
          still feel if it were off.
        </p>
        <p>
          I thrive in collaborative environments, and I'm looking to join an
          in-house team where I can invest long-term in product evolution and
          team success.
        </p>
        <p>
          In my spare time I like to sew, bird, read, and go jogging in Prospect
          Park. I live in Brooklyn with my partner, and we are currently on
          season 16 of Grey's Anatomy.
        </p>
      </div>
    </article>
  );
}
