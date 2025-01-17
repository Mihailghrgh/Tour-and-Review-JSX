import { useEffect, useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://www.course-api.com/react-tours-project";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  //// Fetching data from the URL for Tours
  const fetchTours = async () => {
    setIsLoading(true);

    try {
      const fetchData = await fetch(url);
      const data = await fetchData.json();
      setTours(data);
    } catch (error) {
      throw new Error("Fetch failed");
    }
    setIsLoading(false);
  };
  useEffect(() => {
    fetchTours();
  }, []);

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>No Tours Left</h2>
          <button
            type="button"
            className="btn info-btn"
            style={{ marginTop: "10px" }}
            onClick={() => fetchTours()}
          >
            Get more Tours!
          </button>
        </div>
      </main>
    );
  }

  ////  Tour component mounted after loading has been done ////

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
};
export default App;
