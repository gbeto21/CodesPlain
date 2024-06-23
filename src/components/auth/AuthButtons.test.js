import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { createServer } from "../../test/server";
import AuthButtons from "./AuthButtons";

// createServer() ---> '/api/user' ---> {user: null}
test("When user is not signed in, sign in and sign up are visible", async () => {});

test("When user is not signed in, sign out is not visible", async () => {});

// createServer() ---> '/api/user' ---> {user: {id:3, email: 'asdf@a.com'}}
test("When user is signed in, sign in and sign up are not visible", async () => {});

test("When user is signed in, sign out are is visible", async () => {});
