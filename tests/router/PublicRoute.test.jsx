import { PublicRoute } from "../../src/router/PublicRoute";
import { AuthContext } from "../../src/auth";
import { Routes, Route, MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";

describe("Pruebas en <PublicRoute/>", () => {
  test("Debe de mostrar el children si no esta autenticado", () => {
    const contextValue = {
      logged: false,
    };
    render(
      <AuthContext.Provider value={contextValue}>
        <PublicRoute>
          <h1>Esto ruta publica</h1>
        </PublicRoute>
      </AuthContext.Provider>
    );
    expect(screen.getByText("Esto ruta publica")).toBeTruthy();
    screen.debug();
  });

  test("Debe de navegar si esta autenticado", () => {
    const contextValue = {
      logged: true,
      user: { name: "Strider", id: "ABC123" },
    };
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/login"]}>
          <Routes>
            <Route
              path="login"
              element={
                <PublicRoute>
                  <h1>Esto ruta publica</h1>
                </PublicRoute>
              }
            />

            <Route path="marvel" element={<h1>Pagina de marvel</h1>} />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    );
    expect(screen.getByText("Pagina de marvel")).toBeTruthy();
    // screen.debug();
  });
});
