import { screen, render } from "@testing-library/react";
import RepositoriesSummary from "./RepositoriesSummary";

test("Displays the primary language of the repository", () => {
  const repository = {
    language: "JavaScript",
    stargazers_count: 4,
    forks: 30,
    open_issues: 1,
  };
  render(<RepositoriesSummary repository={repository} />);

  const language = screen.getByText("JavaScript");
  expect(language).toBeInTheDocument();
});
