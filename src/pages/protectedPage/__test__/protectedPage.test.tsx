import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import ProtectedPage from "../index";

const useUser = () => {
  const user: User = { id: 1, userName: "admin" };
  return { user };
};

vi.mock("../../stores/userStore/useUser");

describe("ProtectedPage", () => {
  it("show children if user is atuenticated", () => {
    (useUser as vi.Mock).mockReturnValue({ user: { name: "Juan" } });

    render(
      <ProtectedPage>
        <div>Contenido protegido</div>
      </ProtectedPage>
    );

    expect(screen.getByText("Contenido protegido")).toBeInTheDocument();
  });

  it("redirect to login if user is null", () => {
    (useUser as vi.Mock).mockReturnValue({ user: null });

    render(
      <ProtectedPage>
        <div>Contenido protegido</div>
      </ProtectedPage>
    );

    expect(screen.getByRole("link")).toHaveAttribute("href", "/login");
  });
});
