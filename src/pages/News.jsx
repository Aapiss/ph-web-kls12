import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import Card from "../components/Card";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import useDate from "../hooks/useDate";
import Loading from "../components/Loading";

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  const { dayName, date, monthName, year } = useDate();
  const location = useLocation();

  const { id } = useParams();
  const navigate = useNavigate();

  const [countNews, setCountNews] = useState(6);
  const [loadingBtn, setLoadingBtn] = useState(false);
  const loadNews = () => {
    setLoadingBtn(true);
    setTimeout(() => {
      setCountNews((prev) => prev + 6);
      setLoadingBtn(false);
    }, 2000);
  };

  const getNews = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `https://berita-indo-api-next.vercel.app/api/cnn-news/${id}`
      );

      // console.log(res.data.data);
      setNews(res.data.data);
    } catch (error) {
      if (error.response.status === 400) {
        navigate("/not-found");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getNews();
  }, [id]);

  return (
    <>
      <Header />
      {loading ? (
        <Loading />
      ) : (
        <main className="p-10">
          <h2 className="text-2xl text-center font-bold capitalize">
            News {location.pathname.substring(1)} - {dayName}, {date}{" "}
            {monthName} {year}
          </h2>

          <div className="grid grid-cols-3 my-5 gap-8 max-md:grid-cols-2">
            {news.slice(0, countNews).map((data, i) => (
              <Card data={data} index={i} />
            ))}
          </div>

          <div className="flex justify-center">
            {loadingBtn ? (
              <h2>Loading...</h2>
            ) : (
              <button onClick={loadNews} className="underline text-blue-600">
                Load More
              </button>
            )}
          </div>
        </main>
      )}
    </>
  );
};

export default News;
