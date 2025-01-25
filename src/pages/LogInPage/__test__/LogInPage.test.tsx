import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, waitFor } from "../../../testing/CustomRender/CustomRender";
import LogInPage from "..";
import * as userStore from "../../../stores/userStore/useUser";
import userEvent from "@testing-library/user-event";

const mockLogIn = vi.fn();

describe("LogInPage Component", () => {
  beforeEach(() => {
    vi.mock("../../stores/userStore/useUser", () => ({
      ...vi.importActual("../../stores/userStore/useUser"),
      logIn: mockLogIn,
    }));
  });

  afterEach(() => vi.clearAllMocks());

  it("renders the login form", () => {
    render(<LogInPage />);

    expect(screen.getByLabelText(/User/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/)).toBeInTheDocument();
    expect(screen.getByText(/Log In/)).toBeInTheDocument();
  });

  /* it("logs in when valid credentials are provided", async () => {
    vi.spyOn(userStore, "logIn").mockReturnValue({ user: { id: 1, name: "admin" }, logIn: mockLogIn });
    render(<LogInPage />);

    const userInput = screen.getByLabelText(/User/);
    const passwordInput = screen.getByLabelText(/Password/);
    const loginButton = screen.getByText(/Log In/);

    await userEvent.type(userInput, "admin");
    await userEvent.type(passwordInput, "admin");
    await userEvent.click(loginButton);

    await waitFor(() => {
      expect(mockLogIn).toHaveBeenCalledWith({
        userName: "admin",
        password: "admin",
      });
    });
  }); */
});
