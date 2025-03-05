import { render, screen } from "@testing-library/react";
import ArticleList from "../src/components/ArticleList";

test("renders articles list", () => {
  const articles = [{ id: 1, title: "Test Article", byline: "Author" }];
  render(<ArticleList articles={articles} />);
  expect(screen.getByText("Test Article")).toBeInTheDocument();
});
