'use client';

import { Candidate } from "../../types/Candidate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import styles from "./index.module.scss";
import { useEffect } from "react";

const cx = classNames.bind(styles);

interface ResumeProps {
  candidate: Candidate;
  printMediaType?: boolean;
}

const Resume = (props: ResumeProps) => {
  const {
    candidate: {
      name,
      email,
      websites,
      location,
      skillLists,
      previousJobs,
      degrees,
    },
    printMediaType = false,
  } = props;

  const skillSections = skillLists.map(({ category, skills }) => {
    const listItems = skills.map((skill) => {
      return (
      <li key={skill}>
        {skill}
      </li>);
    });

    return (
      <section
        key={category}
        className={styles.skillGroup}
      >
        <h3>{category}:&nbsp;</h3>

        <div className={styles.skillListContainer}>
          <ul className={styles.skillList}>{listItems}</ul>
        </div>
      </section>
    );
  });

  const resumeClassName = cx("resume", {
    printMediaType,
  });

  useEffect(() => {
    window.addEventListener("beforeprint", () => {
      document.title="andres-arana_front-end"
    });
    window.addEventListener("afterprint", () => {
      document.title="Andres Arana | Front-End Developer"
    });
  });

  return (
    <article className={resumeClassName}>
      <header>
        <h1>{name}</h1>

        <ul className={styles.contactInformation}>
          <li>
            <span className={styles.contactInnerWrapper}>
              <FontAwesomeIcon icon={faEnvelope} widthAuto />
              <span>{email}</span>
            </span>
          </li>
          <li>
            <span className={styles.contactInnerWrapper}>
              <FontAwesomeIcon icon={faGithub} widthAuto />
              <span>{websites[0]}</span>
            </span>
          </li>
          {process.env.NEXT_PUBLIC_USE_LOCATION === "true" && 
            <li>
              <span className={styles.contactInnerWrapper}>
                <FontAwesomeIcon icon={faLocationDot} widthAuto />
                <span>{location}</span>
              </span>
            </li>
          }
        </ul>
      </header>

      <section className={styles.resumeSection}>
        <h2>Skills</h2>

        {skillSections}
      </section>

      <section className={styles.resumeSection}>
        <h2>Work Experience</h2>

        <>
          {previousJobs.map(
            ({
              id,
              jobTitle,
              startDate,
              endDate,
              company,
              companyAdditionalInfo,
              responsibilities,
            }) => {
              return (
                <section
                  key={id}
                  className={styles.accomplishment}
                >
                  <section className={styles.accomplishmentHeader}>
                    <h3>{jobTitle}</h3>
                
                    <p>{startDate} <span className={styles.separator}>-</span> {endDate}</p>
                  </section>

                  <h4 className={styles.companyInfo}>
                    {company}&nbsp;
                    {companyAdditionalInfo && (
                      <span>{companyAdditionalInfo}</span>
                    )}
                  </h4>

                  <ul className={styles.verticalList}>
                    {responsibilities.map((responsibility, i) => (
                      <li key={i}>{responsibility}</li>
                    ))}
                  </ul>
                </section>
              );
            }
          )}
        </>
      </section>

      <section className={styles.resumeSection}>
        <h2>Education</h2>

        <>
          {degrees.map(({ name, endDate, schoolName }) => (
            <section
              key={name}
              className={styles.accomplishment}
            >
              <section className={styles.accomplishmentHeader}>
                <h3>{name}</h3>

                <p>{endDate}</p>
              </section>

              <h4>{schoolName}</h4>
            </section>
          ))}
        </>
      </section>
    </article>
  );
};

export default Resume;
