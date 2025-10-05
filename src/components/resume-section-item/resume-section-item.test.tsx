import { render, screen } from "@testing-library/react";
import ResumeSectionItem, {
  ResumeSectionItemProps,
} from "./resume-section-item";

const sectionItemHeaderContent = "Game Developer";
const sectionItemHeader = <h3>{sectionItemHeaderContent}</h3>;
const sectionItemSubheaderContent = "Nintendo";
const sectionItemSubheader = <h4>{sectionItemSubheaderContent}</h4>;

const renderComponent = (overrides?: Partial<ResumeSectionItemProps>) => {
  return render(
    <ResumeSectionItem
      sectionItemHeader={sectionItemHeader}
      sectionItemSubheader={sectionItemSubheader}
      {...overrides}
    />,
  );
};

test("ResumeSection renders its sectionItemHeader", () => {
  renderComponent();

  const headerElement = screen.getByRole("heading", {
    name: sectionItemHeaderContent,
    level: 3,
  });

  expect(headerElement).toBeInTheDocument();
});

test("ResumeSection renders its sectionItemSubheader", () => {
  renderComponent();

  const subheaderElement = screen.getByRole("heading", {
    name: sectionItemSubheaderContent,
    level: 4,
  });

  expect(subheaderElement).toBeInTheDocument();
});

test("ResumeSection does not render a list if verticalList is absent", () => {
  renderComponent();

  const listElement = screen.queryByRole("list");

  expect(listElement).not.toBeInTheDocument();
});

test("ResumeSection renders a list if verticalList is present", () => {
  const list = [<li key={1}>Mario</li>, <li key={2}>Ring Fit</li>];

  renderComponent({
    verticalList: list,
  });

  const listElement = screen.getByRole("list");

  expect(listElement).toBeInTheDocument();
});
