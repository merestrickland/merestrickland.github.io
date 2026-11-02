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
        {/* <h1 className={styles.heading}>Hi, I&apos;m Meredith.</h1> */}
        <p>
          Hi, I’m Meredith, and this year I broke my arm. I’m also a frontend
          web developer, looking for a job! I primarily work in React and
          Next.js, but I’m always open to learning new things and exploring
          different stacks.
        </p>
        <p>
          Before I was a coder, I grew up in New Orleans, where I developed a
          love for architecture and historic preservation. I studied
          architecture at Bennington College in Vermont, and after graduating I
          worked in those fields both in New Orleans and New York.
        </p>
        <p>
          In 2019, I went through a full stack coding bootcamp, and got my first
          job as a developer in 2020. Since then I’ve worked with several
          creative agencies building out component libraries, web-based apps,
          e-commerce sites, and CMS-driven marketing sites. I’ve brought a lot
          of projects from stages 0 to 1, and now looking to go in-house where I
          can invest in a product long-term and experience the full software
          development lifecycle.
        </p>
      </div>
    </article>
  );
}
