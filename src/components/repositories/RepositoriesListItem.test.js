import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import RepositoriesListItem from "./RepositoriesListItem";

jest.mock("../tree/FileIcon", () => {
  return () => {
    return "File Icon Component";
  };
});

function renderComponent() {
  const repository = {
    full_name: "facebook/react",
    language: "JavaScript",
    description: "A js library",
    owner: "facebook",
    name: "react",
    html_url: "https://github.com/facebook/react",
  };
  render(
    <MemoryRouter>
      <RepositoriesListItem repository={repository} />
    </MemoryRouter>
  );
}

test("Shows a link to the github homepage for this repository", async () => {
  renderComponent();

  // screen.debug();
  // await pause();
  // screen.debug();
  // await screen.findByRole("img", { name: "JavaScript" });
});

const pause = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 100);
  });
};
