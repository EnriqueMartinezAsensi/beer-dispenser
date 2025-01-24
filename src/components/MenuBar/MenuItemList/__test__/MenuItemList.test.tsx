import { describe, it, vi, expect, beforeEach } from "vitest";
import { screen } from "@testing-library/react";
import { render } from "../../../../testing/CustomRender/CustomRender";
import MenuItemList from "..";

const mockLogOut = vi.fn();

describe("MenuItemList Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders correct menu items when user is logged in", () => {
    const mockUser = { id: 1, userName: "Test User" };

    render(<MenuItemList user={mockUser} logOut={mockLogOut} />);

    expect(screen.getByText("Beer Taps")).toBeInTheDocument();
    expect(screen.getByText("Administration")).toBeInTheDocument();
    expect(screen.getByText("Log Out")).toBeInTheDocument();
  });

  it("renders correct menu items when user is NOT logged in", () => {
    render(<MenuItemList user={undefined} logOut={mockLogOut} />);

    expect(screen.getByText("Beer Taps")).toBeInTheDocument();
    expect(screen.queryByText("Administration")).not.toBeInTheDocument();
    expect(screen.getByText("Log In")).toBeInTheDocument();
  });

  it("calls logOut when Log Out link is clicked", () => {
    const mockUser = { id: 1, userName: "Test User" };

    render(<MenuItemList user={mockUser} logOut={mockLogOut} />);

    const logOutLink = screen.getByText("Log Out");
    logOutLink.click();

    expect(mockLogOut).toHaveBeenCalledTimes(1);
  });
});
