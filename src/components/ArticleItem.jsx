import React from "react";

const ArticleItem = ({ article }) => {
  return (
    <div>
      <div style={{ fontSize: 20, fontWeight: 600 }}>{article?.title}</div>
      <p style={{ fontSize: 18, fontWeight: 500 }}>{article?.byline}</p>
    </div>
  );
};

export default ArticleItem;
