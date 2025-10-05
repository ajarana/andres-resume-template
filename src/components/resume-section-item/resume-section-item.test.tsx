import { render, screen } from "@testing-library/react";
import ResumeSectionItem, {
  ResumeSectionItemProps,
} from "./resume-section-item";

const heading = "Game Developer";
const subheading = "Nintendo";

const renderComponent = (overrides?: Partial<ResumeSectionItemProps>) => {
  return render(
    <ResumeSectionItem
      heading={heading}
      subheading={subheading}
      endDate={"May 2016"}
      {...overrides}
    />,
  );
};

test("ResumeSection renders its heading", () => {
  renderComponent();

  const headerElement = screen.getByRole("heading", {
    name: heading,
    level: 3,
  });

  expect(headerElement).toBeInTheDocument();
});

test("ResumeSection renders its subheading", () => {
  renderComponent();

  const subheaderElement = screen.getByRole("heading", {
    name: subheading,
    level: 4,
  });

  expect(subheaderElement).toBeInTheDocument();
});

test("ResumeSection does not render a list if listItems is absent", () => {
  renderComponent();

  const listElement = screen.queryByRole("list");

  expect(listElement).not.toBeInTheDocument();
});

test("ResumeSection renders a list if listItems is present", () => {
  const listItems = ["Mario", "Ring Fit"];

  renderComponent({
    listItems,
  });

  const listElement = screen.getByRole("list");

  expect(listElement).toBeInTheDocument();
});
