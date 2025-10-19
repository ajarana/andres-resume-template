import { Job } from "@/types/candidate";
import ResumeSection from "../resume-section/resume-section";
import ResumeSectionItem from "../resume-section-item/resume-section-item";
import { SECTION_HEADINGS } from "@/constants/section-headings";

interface WorkExperienceSectionProps {
  previousJobs: Job[];
}

const WorkExperienceSection = ({
  previousJobs,
}: WorkExperienceSectionProps) => {
  return (
    <ResumeSection title={SECTION_HEADINGS.WORK_EXPERIENCE}>
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
              <ResumeSectionItem
                key={id}
                heading={jobTitle}
                subheading={company}
                {...(companyAdditionalInfo && {
                  subheadingAdditionalInfo: companyAdditionalInfo,
                })}
                startDate={startDate}
                endDate={endDate}
                listItems={responsibilities}
              />
            );
          },
        )}
      </>
    </ResumeSection>
  );
};

export default WorkExperienceSection;
