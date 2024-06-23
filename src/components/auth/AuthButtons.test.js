import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { createServer } from "../../test/server";
import AuthButtons from "./AuthButtons";

async function renderComponent() {
  render(
    <MemoryRouter>
      <AuthButtons />
    </MemoryRouter>
  );
  await screen.findAllByRole("link");
}

describe("when user is not signed in", () => {
  // createServer() ---> '/api/user' ---> {user: null}
  createServer([
    {
      path: "/api/user",
      res: () => {
        return { user: null };
      },
    },
  ]);
  test("sign in and sign up are visible", async () => {
    await renderComponent();
    const signInButton = screen.getByRole("link", { name: /sign in/i });
    const signUpButton = screen.getByRole("link", { name: /sign up/i });

    expect(signInButton).toBeInTheDocument();
    expect(signInButton).toHaveAttribute("href", "/signin");
    expect(signUpButton).toBeInTheDocument();
    expect(signUpButton).toHaveAttribute("href", "/signup");
  });

  test("sign out is not visible", async () => {
    await renderComponent();

    const signOutButton = screen.queryByRole("link", {
      name: /sign out/i,
    });
    expect(signOutButton).not.toBeInTheDocument();
  });
});

describe("When user is signed in", () => {
  // createServer() ---> '/api/user' ---> {user: {id:3, email: 'asdf@a.com'}}
  // createServer([
  //   {
  //     path: "/api/user",
  //     res: () => {
  //       return { user: { id: 1, email: "asdf@asdf.com" } };
  //     },
  //   },
  // ]);
  // test("sign in and sign up are not visible", async () => {
  //   renderComponent();
  // });
  // test("sign out are is visible", async () => {
  //   renderComponent();
  // });
});
