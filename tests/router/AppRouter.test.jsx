import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../src/auth/context";
import { MemoryRouter } from "react-router-dom";
import { AppRouter } from "../../src/router/AppRouter";


describe("Pruebas en <AppRouter/>", () => {
  test("Debe de motrar el login si no esta autenticado", () => {
    const contextValue = {
      logged: false,
    };
    render(
      <MemoryRouter initialEntries={["/marvel"]}>
        <AuthContext.Provider value={contextValue}>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>
    );
    console.log(screen.getAllByText("Login").length)
    expect(screen.getAllByText("Login").length).toBe(1);
    // screen.debug()
  });

  test("Debe de mostrar el componente de Marvel si esta autenticado", () => {
    const contextValue = {
      logged: true,
      user: {
        id: "ABC123",
        name: "Fernando Martin",
      },
    };
    render(
      <MemoryRouter initialEntries={["/login"]}>
        <AuthContext.Provider value={contextValue}>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>
    );
    expect(screen.getAllByText("Marvel").length).toBeGreaterThan(1);

    //screen.debug();
  });
});
