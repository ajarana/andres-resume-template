import { render, screen } from "@testing-library/react";
import Resume from "@/components/resume/resume";
import { getTestCandidateData } from "@/tests/utils/get-test-candidate-data";

const candidate = getTestCandidateData();

test("renders all headings", () => {
  render(<Resume candidate={candidate} />);

  const { name, skillLists, previousJobs, degrees } = candidate;

  const headingNames = [name, "Skills", "Work Experience", "Education"]
    .concat(skillLists.map(({ category }) => category + ":"))
    .concat(
      previousJobs.reduce(
        (accum: string[], { jobTitle, company, companyAdditionalInfo }) => {
          const companyHeading =
            companyAdditionalInfo ?
              `${company} ${companyAdditionalInfo}`
            : company;

          accum.push(jobTitle);
          accum.push(companyHeading);

          return accum;
        },
        [],
      ),
    )
    .concat(degrees.map(({ name }) => name));

  headingNames.forEach((headingName) => {
    const headingElement = screen.getByRole("heading", {
      name: headingName,
    });

    expect(headingElement).toBeInTheDocument();
  });
});
