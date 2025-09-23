import { AcademicDegree } from "@/types/Candidate";
import ResumeSection from "../resume-section";
import ResumeSectionItem from "../resume-section-item";

interface EducationSectionProps {
  degrees: AcademicDegree[];
}

const EducationSection = ({ degrees }: EducationSectionProps) => {
  return (
    <ResumeSection title={"Education"}>
      <>
        {degrees.map(({ name, endDate, schoolName }) => {
          const sectionItemHeader = (
            <>
              <h3>{name}</h3>
              <p>{endDate}</p>
            </>
          );
          const sectionItemSubheader = <h4>{schoolName}</h4>;

          return (
            <ResumeSectionItem
              key={name}
              sectionItemHeader={sectionItemHeader}
              sectionItemSubheader={sectionItemSubheader}
            />
          );
        })}
      </>
    </ResumeSection>
  );
};

export default EducationSection;
