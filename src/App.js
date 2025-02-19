import { useEffect } from "react";


//8ac8ab8e

const API_URL = 'http://www.omdbapi.com/?apikey=8ac8ab8e&';

const App = () => {

    const searchMovies =async (title) => { //async means asynchronous data which means it takes time to fetch these movies.
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        console.log(data);
    }


    useEffect(() => {
        searchMovies('Avengers');
    }, []);
  return <h1>App</h1>;
};

export default App;
