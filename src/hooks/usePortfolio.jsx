"use client";
import { useEffect, useState } from "react";

const usePortfolio = () => {
  const [portfolio, setPortfolio] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:3000/api/projects")
      .then((res) => res.json())
      .then((data) => {
        setPortfolio(data);
        setLoading(false);
      });
  }, []);
  return portfolio;
};

export default usePortfolio;
