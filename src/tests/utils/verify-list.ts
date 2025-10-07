import { screen } from "@testing-library/react";

export const verifyListItemsExist = (list: string[]): void => {
  list.forEach((item) => {
    const listElement = screen.getByText(item);

    expect(listElement).toBeInTheDocument();
  });
};
