import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import RepositoriesListItem from "./RepositoriesListItem";

function renderComponent() {
  const repository = {
    full_name: "facebook/react",
    language: "JavaScript",
    description: "A js library",
    owner: "facebook",
    name: "react",
    html_url: "/repositories/facebook/react",
  };
  render(
    <MemoryRouter>
      <RepositoriesListItem repository={repository} />
    </MemoryRouter>
  );
  return { repository };
}

test("Shows a link to the github homepage for this repository", async () => {
  const { repository } = renderComponent();
  await screen.findByRole("img", { name: "JavaScript" });

  const link = screen.getByRole("link");
  expect(link).toHaveAttribute("href", repository.html_url);
});
