import { render, screen } from "../../../testing/CustomRender/CustomRender";
import ErrorPage from "..";

const mockNavigate = vi.fn();

describe("ErrorPage Component", () => {
  beforeEach(() => {
    vi.mock("react-router", async () => ({
      ...(await vi.importActual("react-router")),
      useNavigate: () => mockNavigate,
    }));
  });

  afterEach(() => vi.clearAllMocks());

  it("renders ErrorPage", () => {
    render(<ErrorPage />);
    expect(screen.getByText("Error")).toBeInTheDocument();
  });

  it("calls navigate when Go back button is clicked", () => {
    render(<ErrorPage />);

    const goBackButton = screen.getByText(/Go back!/);
    goBackButton.click();

    expect(mockNavigate).toHaveBeenCalledWith("/");
  });
});
