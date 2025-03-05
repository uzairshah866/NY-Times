import React, { useEffect, useState } from "react";
import { fetchArticles } from "../services/api";
import ArticleList from "../components/ArticleList";

const Home = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const loadArticles = async () => {
      const data = await fetchArticles();
      setArticles(data);
    };
    loadArticles();
  }, []);

  return (
    <div>
      <ArticleList articles={articles} />
    </div>
  );
};

export default Home;
