import React, { useEffect, useState } from 'react';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      const movies = [{ title: 'Titanic' }, { title: 'Back To The Future' }];
      setMovies(movies);
    }, 1000 * 10);
  }, []);

  return (
    <div>
      {movies.length > 0 && (
        <div>
          {movies.map((x, idx) => (
            <div key={idx} data-testid="movies">
              {x.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
