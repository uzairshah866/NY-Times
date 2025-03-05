import React from "react";
import { useParams } from "react-router-dom";

const ArticleDetail = ({ articles }) => {
  const { id } = useParams();
  const article = articles.find((item) => item.id === parseInt(id));

  if (!article) return <p>Article not found</p>;

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
      <h1>{article.title}</h1>
      <p>{article.abstract}</p>
      <a href={article.url} className="text-blue-500">
        Read Full Article
      </a>
    </div>
  );
};

export default ArticleDetail;
