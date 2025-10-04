import { render, screen } from "@testing-library/react";
import ResumeSectionItem from "./resume-section-item";

const sectionItemHeaderContent = "Game Developer";
const sectionItemHeader = <h3>{sectionItemHeaderContent}</h3>;
const sectionItemSubheaderContent = "Nintendo";
const sectionItemSubheader = <h4>{sectionItemSubheaderContent}</h4>;

test("ResumeSection renders its sectionItemHeader", () => {
  render(
    <ResumeSectionItem
      sectionItemHeader={sectionItemHeader}
      sectionItemSubheader={sectionItemSubheader}
    />,
  );

  const headerElement = screen.getByRole("heading", {
    name: sectionItemHeaderContent,
    level: 3,
  });

  expect(headerElement).toBeInTheDocument();
});

test("ResumeSection renders its sectionItemSubheader", () => {
  render(
    <ResumeSectionItem
      sectionItemHeader={sectionItemHeader}
      sectionItemSubheader={sectionItemSubheader}
    />,
  );

  const subheaderElement = screen.getByRole("heading", {
    name: sectionItemSubheaderContent,
    level: 4,
  });

  expect(subheaderElement).toBeInTheDocument();
});

test("ResumeSection renders its verticalList", () => {
  const list = [<li key={1}>Mario</li>, <li key={2}>Ring Fit</li>];

  render(
    <ResumeSectionItem
      sectionItemHeader={sectionItemHeader}
      sectionItemSubheader={sectionItemSubheader}
      verticalList={list}
    />,
  );

  const listElement = screen.getByRole("list");

  expect(listElement).toBeInTheDocument();
});
