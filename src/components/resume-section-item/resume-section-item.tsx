import styles from "./resume-section-item.module.scss";

export interface ResumeSectionItemProps {
  heading: string;
  subheading: string;
  subheadingAdditionalInfo?: string;
  startDate?: string;
  endDate: string;
  listItems?: string[];
}

const ResumeSectionItem = ({
  heading,
  subheading,
  subheadingAdditionalInfo,
  startDate,
  endDate,
  listItems,
}: ResumeSectionItemProps) => {
  const dates = (
    <p>
      {startDate && `${startDate} - `}
      {endDate}
    </p>
  );

  return (
    <section className={styles.accomplishment}>
      <div className={styles.accomplishmentHeader}>
        <h3>{heading}</h3>
        {dates}
      </div>

      <h4>
        {subheading}
        {subheadingAdditionalInfo && (
          <span>{` ${subheadingAdditionalInfo}`}</span>
        )}
      </h4>

      {listItems && (
        <ul className={styles.verticalList}>
          {listItems.map((item, i) => {
            return <li key={i}>{item}</li>;
          })}
        </ul>
      )}
    </section>
  );
};

export default ResumeSectionItem;
