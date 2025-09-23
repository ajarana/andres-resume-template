import { Job } from "@/types/Candidate";
import ResumeSection from "../resume-section";
import ResumeSectionItem from "../resume-section-item";

interface WorkExperienceSectionProps {
  previousJobs: Job[];
}

const WorkExperienceSection = ({
  previousJobs,
}: WorkExperienceSectionProps) => {
  return (
    <ResumeSection title={"Work Experience"}>
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
            const sectionItemHeader = (
              <>
                <h3>{jobTitle}</h3>{" "}
                <p>
                  {startDate} <span>-</span> {endDate}
                </p>
              </>
            );
            const sectionItemSubheader = (
              <h4>
                {company}&nbsp;
                {companyAdditionalInfo && <span>{companyAdditionalInfo}</span>}
              </h4>
            );
            const verticalList = responsibilities.map((responsibility, i) => (
              <li key={i}>{responsibility}</li>
            ));

            return (
              <ResumeSectionItem
                key={id}
                sectionItemHeader={sectionItemHeader}
                sectionItemSubheader={sectionItemSubheader}
                verticalList={verticalList}
              />
            );
          },
        )}
      </>
    </ResumeSection>
  );
};

export default WorkExperienceSection;
