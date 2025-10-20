import { render, screen } from "@testing-library/react";
import ResumeSection from "./resume-section";

describe("ResumeSection", () => {
  test("renders its header and children", () => {
    const title = "Personal Projects";
    const childContent = "Child Content";

    render(
      <ResumeSection title={title}>
        <>{childContent}</>
      </ResumeSection>,
    );

    const headingElement = screen.getByRole("heading", {
      name: title,
      level: 2,
    });
    const childElementContent = screen.getByText(childContent);

    expect(headingElement).toBeInTheDocument();
    expect(childElementContent).toBeInTheDocument();
  });
});
