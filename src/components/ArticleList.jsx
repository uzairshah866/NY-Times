import React from "react";
import ArticleItem from "./ArticleItem";
import { Link } from "react-router-dom";

const ArticleList = ({ articles }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        width: "100vw",
      }}
    >
      <h1>NY Times Most Popular Articles</h1>
      <ul>
        {articles?.map((article) => (
          <li key={article.id}>
            <Link to={`/article/${article.id}`}>
              <ArticleItem article={article} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticleList;
