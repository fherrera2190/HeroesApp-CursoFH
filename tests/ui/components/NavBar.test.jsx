import { fireEvent, render, screen } from "@testing-library/react";
import { Navbar } from "../../../src/ui/components/NavBar";
import { AuthContext } from "../../../src/auth/context/AuthContext";
import { MemoryRouter, useNavigate } from "react-router-dom";

const mockedUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUseNavigate,
}));

useNavigate;

describe("Pruebas en el componente <NavBar/>", () => {
  const contextValue = {
    logged: true,
    user: { id: "ABC123", name: "Nemesis ABC" },
    logout: jest.fn(),
  };
  beforeEach(() => jest.clearAllMocks());
  test("Debe de mostrar el usuario", () => {
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>
    );
    expect(screen.getByText("Nemesis ABC")).toBeTruthy();
    screen.debug();
  });

  test("Debe de llamar el logout y navigate cuando se hace click en el boton", () => {
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>
    );
    const logoutBtn = screen.getByRole("button");
    fireEvent.click(logoutBtn);
    expect(contextValue.logout).toHaveBeenCalledTimes(1);
    expect(mockedUseNavigate).toHaveBeenCalledWith("/login", { replace: true });
  });
});
