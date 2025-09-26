import { render, screen } from "@testing-library/react";
import { Candidate } from "../../types/Candidate";
import Resume from "@/components/resume";

const candidate: Candidate = {
  name: "John Smith",
  location: "Canada",
  email: "johnsmith@email.com",
  websites: ["A portfolio URL"],
  skillLists: [
    {
      category: "Cooking",
      skills: ["Desserts", "Mexican", "Lebanese", "Korean"],
    },
    {
      category: "Managing",
      skills: ["Time"],
    },
  ],
  previousJobs: [
    {
      id: 0,
      jobTitle: "Executive Chef",
      startDate: "Sept 2020",
      endDate: "Present",
      company: "Michelin",
      responsibilities: [
        "Cooking delicious food.",
        "Managing a team of 3 chefs.",
      ],
    },
  ],
  degrees: [
    {
      name: "Bachelor of Arts in Culinary Arts",
      endDate: "May 2016",
      schoolName: "Culinary Arts Academy Switzerland",
    },
  ],
  metadata: {
    webPageTitle: "John Smith | Executive Chef",
    pdfPageTitle: "john-smith_executive-chef",
  },
};

test("renders all headings", () => {
  render(<Resume candidate={candidate} />);

  const { name, skillLists, previousJobs, degrees } = candidate;

  const headingNames = [name, "Skills", "Work Experience", "Education"]
    .concat(skillLists.map(({ category }) => category + ":"))
    .concat(
      previousJobs.reduce((accum: string[], { jobTitle, company }) => {
        accum.push(jobTitle);
        accum.push(company);

        return accum;
      }, []),
    )
    .concat(degrees.map(({ name }) => name));

  headingNames.forEach((headingName) => {
    const headingElement = screen.getByRole("heading", {
      name: headingName,
    });

    expect(headingElement).toBeInTheDocument();
  });
});

test("renders all lists", () => {
  render(<Resume candidate={candidate} />);

  const verifyList = (list: string[]): void => {
    list.forEach((item) => {
      const listElement = screen.getByText(item);

      expect(listElement).toBeInTheDocument();
    });
  };

  candidate.skillLists.forEach(({ skills }) => {
    verifyList(skills);
  });

  candidate.previousJobs.forEach(({ responsibilities }) => {
    verifyList(responsibilities);
  });
});
