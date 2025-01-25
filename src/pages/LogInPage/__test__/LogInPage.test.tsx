import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen /* waitFor */ } from "../../../testing/CustomRender/CustomRender";
import LogInPage from "..";
/* import * as userStore from "../../../stores/userStore/useUser";
import userEvent from "@testing-library/user-event"; */

const mockLogIn = vi.hoisted(() => vi.fn());

describe("LogInPage Component", () => {
  beforeEach(() => {
    vi.mock("../../stores/userStore/useUser", () => ({
      ...vi.importActual("../../stores/userStore/useUser"),
      logIn: mockLogIn,
    }));
  });

  afterEach(() => vi.clearAllMocks());

  it("renders the login form", async () => {
    render(<LogInPage />);

    expect(await screen.findByLabelText(/User/)).toBeInTheDocument();
    expect(await screen.findByLabelText(/Password/)).toBeInTheDocument();
    expect(await screen.findByText(/Log In/)).toBeInTheDocument();
  });

  /* it("logs in when valid credentials are provided", async () => {
    vi.spyOn(userStore, "default").mockReturnValue({ user: { id: 1, userName: "admin" } });

    render(<LogInPage />);

    const userInput = await screen.findByLabelText(/User/);
    const passwordInput = await screen.findByLabelText(/Password/);
    const loginButton = await screen.findByText(/Log In/);

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
