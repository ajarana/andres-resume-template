import { SkillList } from "@/types/Candidate";
import styles from "./index.module.scss";
import ResumeSection from "../resume-section";

interface SkillsSectionProps {
  skillLists: SkillList[];
}

const SkillsSection = ({ skillLists }: SkillsSectionProps) => {
  const skillSections = skillLists.map(({ category, skills }) => {
    const listItems = skills.map((skill) => {
      return <li key={skill}>{skill}</li>;
    });

    return (
      <section key={category} className={styles.skillGroup}>
        <h3>{category}:&nbsp;</h3>

        <div className={styles.skillListContainer}>
          <ul className={styles.skillList}>{listItems}</ul>
        </div>
      </section>
    );
  });

  return <ResumeSection title={"Skills"}>{skillSections}</ResumeSection>;
};

export default SkillsSection;
