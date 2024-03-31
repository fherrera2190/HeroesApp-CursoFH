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

          <AppRouter/>
        </AuthContext.Provider>
      </MemoryRouter>
    );
    screen.debug()
  });
});
