import React, { useState } from 'react';


const App = () => {
    const [count, setCount] = useState(0);
    const [movies,setMovies] = useState([
      {
          id: 1,
          title: "The Last Adventure",
          genre: "Action",
          releaseYear: 2023,
          rating: 2
      },
      {
          id: 2,
          title: "Love in the Time of Robots",
          genre: "Romantic Comedy",
          releaseYear: 2022,
          rating: 7.2
      },
      {
          id: 3,
          title: "Dark Shadows",
          genre: "Horror",
          releaseYear: 2021,
          rating: 6.8
      }
  ]);
  
  
    
    return (
        <div>
            
            {movies.map((value)=>value.rating>5 ? <li key={Math.random()}><h3>{value.title}</h3><br /></li>:"")}

        </div>
    );
}

export default App;
