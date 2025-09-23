"use client";

import { Candidate } from "../../types/Candidate";
import classNames from "classnames/bind";
import styles from "./index.module.scss";
import { useEffect } from "react";
import TemplateHeader from "../template-header";
import SkillsSection from "../skills-section";
import WorkExperienceSection from "../work-experience-section";
import EducationSection from "../education-section";

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

  useEffect(() => {
    window.addEventListener("beforeprint", () => {
      document.title = "andres-arana_front-end";
    });
    window.addEventListener("afterprint", () => {
      document.title = "Andres Arana | Front-End Developer";
    });
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
