import { render, screen } from "@testing-library/react";
import SkillsSection from "./skills-section";
import { SkillList } from "@/types/candidate";
import { verifyListItemsExist } from "@/tests/utils/verify-list";

describe("SkillsSection", () => {
  const skillLists: SkillList[] = [
    {
      category: "Cooking",
      skills: ["French Cuisine", "Italian Cuisine", "Peruvian Cuisine"],
    },
    {
      category: "Baking",
      skills: ["Brownies", "Cakes", "Cookies"],
    },
  ];

  const renderComponent = () => {
    return render(<SkillsSection skillLists={skillLists} />);
  };

  test("renders skills section categories", () => {
    renderComponent();

    const headings = skillLists.map((skillList) => skillList.category);

    headings.forEach((heading) => {
      screen.getByRole("heading", {
        name: heading + ":",
        level: 3,
      });
    });
  });

  test("renders skill lists", () => {
    renderComponent();

    const allSkills = skillLists.flatMap((skillList) => skillList.skills);

    verifyListItemsExist(allSkills);
  });
});
