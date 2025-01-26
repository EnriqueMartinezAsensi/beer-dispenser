import { describe, it, vi, expect, beforeEach } from "vitest";
import { screen } from "@testing-library/react";
import { render } from "../../../../testing/CustomRender/CustomRender";
import MenuItemList from "..";
import userEvent from "@testing-library/user-event";

const mockLogOut = vi.fn();
const onClick = vi.fn();

describe("MenuItemList Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders correct menu items when user is logged in", () => {
    const mockUser = { id: 1, userName: "Test User" };

    render(<MenuItemList user={mockUser} logOut={mockLogOut} onClick={onClick} />);

    expect(screen.getByText("Beer Taps")).toBeInTheDocument();
    expect(screen.getByText("Administration")).toBeInTheDocument();
    expect(screen.getByText("Log Out")).toBeInTheDocument();
  });

  it("renders correct menu items when user is NOT logged in", () => {
    render(<MenuItemList user={undefined} logOut={mockLogOut} onClick={onClick} />);

    expect(screen.getByText("Beer Taps")).toBeInTheDocument();
    expect(screen.queryByText("Administration")).not.toBeInTheDocument();
    expect(screen.getByText("Log In")).toBeInTheDocument();
  });

  it("calls logOut when Log Out link is clicked", async () => {
    const mockUser = { id: 1, userName: "Test User" };

    render(<MenuItemList user={mockUser} logOut={mockLogOut} onClick={onClick} />);

    const logOutLink = screen.getByText("Log Out");
    await userEvent.click(logOutLink);

    expect(mockLogOut).toHaveBeenCalledTimes(1);
  });

  it("calls onClick when Beer Taps link is clicked", async () => {
    const mockUser = { id: 1, userName: "Test User" };

    render(<MenuItemList user={mockUser} logOut={mockLogOut} onClick={onClick} />);

    const beerTapsLink = screen.getByText("Beer Taps");
    await userEvent.click(beerTapsLink);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
