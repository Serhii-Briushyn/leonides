import SectionHeader from "../SectionHeader/SectionHeader";
import NeedsCards from "../NeedsCards/NeedsCards";

import needsContent from "../../data/needsContent.json";

import styles from "./Needs.module.css";

const renderParagraph = (paragraph) => {
  return paragraph.map((part, idx) => {
    if (typeof part === "string") return part;
    if (part.tag === "span") return <span key={idx}>{part.text}</span>;
    return null;
  });
};

const Needs = () => {
  const { description, sections } = needsContent;

  return (
    <section id="needs" className={styles.section}>
      <div className={styles.upperHeader}>
        <h2>LEONIDES </h2>
        <p>Transform your life</p>
      </div>
      <div className={styles.container}>
        <SectionHeader variant="needs" />
        <NeedsCards />
        <div className={styles.content}>
          {description.map((desc, idx) => (
            <p
              key={idx}
              className={styles.description}
              style={idx === 0 ? { marginBottom: "24px" } : {}}
            >
              {renderParagraph(desc)}
            </p>
          ))}

          <ul className={styles.list}>
            {sections.map((section, idx) => (
              <li key={idx} className={styles.item}>
                <h3>{section.title}</h3>
                <p>{renderParagraph(section.paragraph)}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Needs;
