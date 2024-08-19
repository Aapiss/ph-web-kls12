import axios from "axios";
import React, { useEffect, useState } from "react";

const useNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const getNews = async () => {
    try {
      const res = await axios.get(
        "https://berita-indo-api-next.vercel.app/api/cnn-news"
      );

      // console.log(res.data.data);
      setNews(res.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getNews();
  }, []);

  return { news, loading };
};

export default useNews;
