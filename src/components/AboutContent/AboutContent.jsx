import content from "../../data/aboutContent.json";

import styles from "./AboutContent.module.css";

const renderParagraph = (paragraph) => {
  return paragraph.map((part, idx) => {
    if (typeof part === "string") return part;
    if (part.tag === "span") return <span key={idx}>{part.text}</span>;
    return null;
  });
};

const AboutContent = () => {
  return (
    <ul className={styles.container}>
      {content.sections.map((section, idx) => (
        <li key={idx}>
          <h2 className={styles.title}>{section.title}</h2>

          {section.content &&
            section.content.map((paragraph, pIdx) => (
              <p className={styles.description} key={pIdx}>
                {renderParagraph(paragraph)}
              </p>
            ))}

          {section.list && (
            <ul className={styles.list}>
              {section.list.map((item, lIdx) => (
                <li key={lIdx}>{item}</li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default AboutContent;
