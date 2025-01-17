import Tour from "./Tour";

const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="title-underline"></div>
      </div>
      <div className="tours">
        {tours.map((map) => {
          return <Tour key={map.id} {...map} removeTour={removeTour} />;
        })}
      </div>
    </section>
  );
};
export default Tours;
