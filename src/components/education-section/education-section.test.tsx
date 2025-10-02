import { render, screen } from "@testing-library/react";
import { Candidate } from "@/types/candidate";
import EducationSection from "./education-section";
import { getTestCandidateData } from "@/tests/utils/get-test-candidate-data";
import { verifyList } from "@/tests/utils/verify-list";

const candidate: Candidate = getTestCandidateData();

test("renders all headings", () => {
  render(<EducationSection degrees={candidate.degrees} />);

  const { degrees } = candidate;

  const headingNames = ["Education"].concat(degrees.map(({ name }) => name));

  headingNames.forEach((headingName) => {
    const headingElement = screen.getByRole("heading", {
      name: headingName,
    });

    expect(headingElement).toBeInTheDocument();
  });
});

test("renders all degree names", () => {
  render(<EducationSection degrees={candidate.degrees} />);

  verifyList(candidate.degrees.map(({ name }) => name));
});
