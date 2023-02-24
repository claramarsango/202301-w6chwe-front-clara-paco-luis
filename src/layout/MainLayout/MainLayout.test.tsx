import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import MainLayout from "./MainLayout";

describe("Given a main layout", () => {
  test("When a page is accessed, then return a title", () => {
    render(
      <MemoryRouter>
        <MainLayout />
      </MemoryRouter>
    );
    const title = screen.getByRole("heading");
    expect(title).toBeInTheDocument();
  });
});
