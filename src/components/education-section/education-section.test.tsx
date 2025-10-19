import { render, screen } from "@testing-library/react";
import { Candidate } from "@/types/candidate";
import EducationSection from "./education-section";
import { getTestCandidateData } from "@/tests/utils/get-test-candidate-data";
import { verifyListItemsExist } from "@/tests/utils/verify-list";

const candidate: Candidate = getTestCandidateData();

test("renders all degree names", () => {
  render(<EducationSection degrees={candidate.degrees} />);

  const { degrees } = candidate;

  const headingNames = degrees.map(({ name }) => name);

  headingNames.forEach((headingName) => {
    const headingElement = screen.getByRole("heading", {
      name: headingName,
    });

    expect(headingElement).toBeInTheDocument();
  });
});

test("renders all school names", () => {
  render(<EducationSection degrees={candidate.degrees} />);

  verifyListItemsExist(candidate.degrees.map(({ schoolName }) => schoolName));
});
