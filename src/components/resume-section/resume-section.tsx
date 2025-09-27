import styles from "./resume-section.module.scss";

interface ResumeSectionProps {
  title: string;
  children: React.ReactNode;
}
const ResumeSection = ({ title, children }: ResumeSectionProps) => {
  return (
    <section className={styles.resumeSection}>
      <h2>{title}</h2>

      {children}
    </section>
  );
};

export default ResumeSection;
