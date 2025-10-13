import { DOCUMENT_TITLES } from "@/constants/document-titles";
import PrintTitleEffect from "./print-title-effect";
import { render } from "@testing-library/react";

jest.mock("@/constants/document-titles", () => ({
  DOCUMENT_TITLES: {
    WEB: "Mock Web Title",
    PDF: "Mock PDF Title",
  },
}));

describe("PrintTitleEffect", () => {
  beforeEach(() => {
    document.title = "Initial Title";
  });

  test("title gets changed to its PDF version on beforeprint", () => {
    render(<PrintTitleEffect />);

    window.dispatchEvent(new Event("beforeprint"));

    expect(document.title).toBe(DOCUMENT_TITLES.PDF);
  });

  test("title gets changed to its Web version on afterprint", () => {
    render(<PrintTitleEffect />);

    window.dispatchEvent(new Event("afterprint"));

    expect(document.title).toBe(DOCUMENT_TITLES.WEB);
  });
});
