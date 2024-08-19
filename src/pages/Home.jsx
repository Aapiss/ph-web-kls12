import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import Card from "../components/Card";
import useDate from "../hooks/useDate";
import useNews from "../hooks/useNews";
import Loading from "../components/Loading";

const Home = () => {
  const { dayName, date, monthName, year } = useDate();

  const { news, loading } = useNews();
  const [countNews, setCountNews] = useState(6);
  const [loadingBtn, setLoadingBtn] = useState(false);
  const loadNews = () => {
    setLoadingBtn(true);
    setTimeout(() => {
      setCountNews((prev) => prev + 6);
      setLoadingBtn(false);
    }, 2000);
  };
  return (
    <>
      <Header />
      {loading ? (
        <Loading />
      ) : (
        <main className="p-10">
          <h2 className="text-2xl text-center font-bold">
            News Today - {dayName}, {date} {monthName} {year}
          </h2>

          <div className="grid grid-cols-3 my-5 gap-8 max-md:grid-cols-2">
            {news.slice(0, countNews).map((data, i) => (
              <Card data={data} index={i} news={news} />
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

export default Home;
