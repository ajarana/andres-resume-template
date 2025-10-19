import { render, screen } from "@testing-library/react";
import Resume from "@/components/resume/resume";
import { getTestCandidateData } from "@/tests/utils/get-test-candidate-data";
import { SECTION_HEADINGS } from "@/constants/section-headings";

const candidate = getTestCandidateData();

test("renders all section headings", () => {
  render(<Resume candidate={candidate} />);

  const { name } = candidate;

  const sectionHeadings = [
    name,
    SECTION_HEADINGS.SKILLS,
    SECTION_HEADINGS.WORK_EXPERIENCE,
    SECTION_HEADINGS.EDUCATION,
  ];

  sectionHeadings.forEach((headingName) => {
    const headingElement = screen.getByRole("heading", {
      name: headingName,
    });

    expect(headingElement).toBeInTheDocument();
  });
});
