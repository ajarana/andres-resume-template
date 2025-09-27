import { Candidate } from "../../types/candidate";
import classNames from "classnames/bind";
import styles from "./resume.module.scss";
import TemplateHeader from "../template-header/template-header";
import SkillsSection from "../skills-section/skills-section";
import WorkExperienceSection from "../work-experience-section/work-experience-section";
import EducationSection from "../education-section/education-section";

const cx = classNames.bind(styles);

interface ResumeProps {
  candidate: Candidate;
  printMediaType?: boolean;
}

const Resume = ({ candidate, printMediaType = false }: ResumeProps) => {
  const { skillLists, previousJobs, degrees } = candidate;

  const resumeClassName = cx("resume", {
    printMediaType,
  });

  return (
    <article className={resumeClassName}>
      <TemplateHeader candidate={candidate} />

      <SkillsSection skillLists={skillLists} />

      <WorkExperienceSection previousJobs={previousJobs} />

      <EducationSection degrees={degrees} />
    </article>
  );
};

export default Resume;
