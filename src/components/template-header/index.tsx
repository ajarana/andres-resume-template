import { Candidate } from "@/types/Candidate";
import styles from "./index.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

interface ResumeProps {
  candidate: Candidate;
  printMediaType?: boolean;
}

const TemplateHeader = (props: ResumeProps) => {
  const {
    candidate: { name, email, websites, location },
  } = props;

  return (
    <header className={styles.resumeHeader}>
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
        {process.env.NEXT_PUBLIC_USE_LOCATION === "true" && (
          <li>
            <span className={styles.contactInnerWrapper}>
              <FontAwesomeIcon icon={faLocationDot} widthAuto />
              <span>{location}</span>
            </span>
          </li>
        )}
      </ul>
    </header>
  );
};

export default TemplateHeader;
