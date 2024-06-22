import { render, screen } from "@testing-library/react";
import RepositoriesListItem from "./RepositoriesListItem";

function renderComponent() {
  const repository = {
    full_name: "facebook/react",
    language: "JavaScript",
    description: "A js library",
    owner: "facebook",
    name: "react",
    html_url: "https://github.com/facebook/react",
  };
  render(<RepositoriesListItem repository={repository} />);
}

test("Shows a link to the github homepage for this repository", () => {
  renderComponent();
});
