import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import StarRating from './StarRating';

function Test() {

  const [movieRating, setMovieRating] = useState(0);

  return (
    <div>
      <StarRating color='blue' maxRating={10} onSetRating={setMovieRating}/>
      { movieRating > 0 && <p>This movie was rated {movieRating} stars.</p>}
    </div>
  )
}


function App() {
  return (
    <div className="App">
      <StarRating maxRating={10}/>
      <StarRating 
        color='red'
        size={30}
        messages={['Terrible', 'Poor', 'Okay', 'Good', 'Satisfied', 'Very Good', 'Excellent', 'Outstanding', 'Exceptional', 'Perfect']}
        className=""
        defaultRating={3}
      />
      <Test />
    </div>
  );
}

export default App;
