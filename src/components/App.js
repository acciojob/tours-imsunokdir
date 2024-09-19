import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import Tour from "./Tour";
import { tourData } from "./tourData";
import "../styles/App.css";

const App = () => {
  const [tData, setTdata] = useState(tourData);
  const [tour, setTour] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setTour(tourData);
      setLoading(false);
    }, 2000);
    // setTour(tourData);
    // setLoading(false);
  }, []);

  const handleRemove = (id) => {
    const newData = tour.filter((item) => item.id != id);
    setTour(newData);
  };
  const handleRefresh = () => {
    setTour(tData);
  };

  return (
    <div id="main">
      {loading ? (
        <Loading />
      ) : tour.length > 0 ? (
        tour.map((item) => {
          return (
            <Tour
              item={item}
              key={item.id}
              handleRemove={handleRemove}
              id={item.id}
            />
          );
        })
      ) : (
        <div>
          <h2>There are no tours left</h2>
          <button onClick={handleRefresh}>Refresh</button>
        </div>
      )}
    </div>
  );
};
export default App;
