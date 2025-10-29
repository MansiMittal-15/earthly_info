const CountryListShimmer = () => {
  return (
    <>
      <main className="shimmer-main">
        {Array.from({ length: 15 }).map((val, index) => {
          return (
            <div className="shimmer-card" key={index}>
              <div className="shimmer-image"></div>
              <div className="shimmer-details">
                <h3></h3>
                <p></p>
                <p></p>
                <p></p>
              </div>
            </div>
          );
        })}
      </main>
    </>
  );
};

export default CountryListShimmer;
