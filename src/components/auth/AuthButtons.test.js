import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { createServer } from "../../test/server";
import AuthButtons from "./AuthButtons";

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
  test("When user is not signed in, sign in and sign up are visible", async () => {});

  test("When user is not signed in, sign out is not visible", async () => {});
});

describe("When user is signed in", () => {
  // createServer() ---> '/api/user' ---> {user: {id:3, email: 'asdf@a.com'}}
  createServer([
    {
      path: "/api/user",
      res: () => {
        return { user: { id: 1, email: "asdf@asdf.com" } };
      },
    },
  ]);
  test("When user is signed in, sign in and sign up are not visible", async () => {});

  test("When user is signed in, sign out are is visible", async () => {});
});
