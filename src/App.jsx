import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ArticleDetail from "./pages/ArticleDetail";
import { fetchArticles } from "./services/api";

const App = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const loadArticles = async () => {
      const data = await fetchArticles();
      setArticles(data);
    };
    loadArticles();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/article/:id"
          element={<ArticleDetail articles={articles} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
