import styles from "./resume-section-item.module.scss";

export interface ResumeSectionItemProps {
  sectionItemHeader: React.ReactNode;
  sectionItemSubheader: React.ReactNode;
  verticalList?: React.ReactNode;
}

const ResumeSectionItem = ({
  sectionItemHeader,
  sectionItemSubheader,
  verticalList,
}: ResumeSectionItemProps) => {
  return (
    <section className={styles.accomplishment}>
      <div className={styles.accomplishmentHeader}>{sectionItemHeader}</div>

      {sectionItemSubheader}

      {verticalList && <ul className={styles.verticalList}>{verticalList}</ul>}
    </section>
  );
};

export default ResumeSectionItem;
