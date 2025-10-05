import { AcademicDegree } from "@/types/candidate";
import ResumeSection from "../resume-section/resume-section";
import ResumeSectionItem from "../resume-section-item/resume-section-item";

interface EducationSectionProps {
  degrees: AcademicDegree[];
}

const EducationSection = ({ degrees }: EducationSectionProps) => {
  return (
    <ResumeSection title={"Education"}>
      <>
        {degrees.map(({ name, endDate, schoolName }) => {
          return (
            <ResumeSectionItem
              key={name}
              heading={name}
              subheading={schoolName}
              endDate={endDate}
            />
          );
        })}
      </>
    </ResumeSection>
  );
};

export default EducationSection;
