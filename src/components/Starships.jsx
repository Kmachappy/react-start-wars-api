const Starships = ({ starships }) => {
  
    return starships ? 
    <div className="starships-container">
      {starships.map((starship) => {
        return (
          <div className="starship-card">
            <h1>{starship.name}</h1>
          </div>
        );
      })}
    </div>
   : 
    <div id="loading">
      <h1>LOADING......</h1>
    </div>
  ;
};

export default Starships;

