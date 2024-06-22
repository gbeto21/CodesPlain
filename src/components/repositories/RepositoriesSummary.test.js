import { screen, render } from "@testing-library/react";
import RepositoriesSummary from "./RepositoriesSummary";

test("Displays information about the repository", () => {
  const repository = {
    language: "JavaScript",
    stargazers_count: 4,
    forks: 30,
    open_issues: 1,
  };
  render(<RepositoriesSummary repository={repository} />);

  for (let key in repository) {
    const value = repository[key];
    const element = screen.getByText(value);

    expect(element).toBeInTheDocument();
  }
});
