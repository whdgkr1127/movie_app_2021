import React from 'react';
import axios from 'axios';
import Movie from './Movie'
import "./App.css";

class App extends React.Component{
  state = {
    isLoading:true,
    movies:[]//state는 필수가 아니다.
  } 


  getMovies = async () => {//async await는 같이 써줘야 하며 axios가 data를 가져올때 까지 기다려 달라고 javascript에 말해주는 역할을 한다.
    const {data:{data:{movies}}} = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating")
    this.setState({ movies, isLoading:false});
  }
  componentDidMount(){
    this.getMovies();
    }

  

  render(){
   const { isLoading, movies } = this.state;//state 안에있는 isLoading과 movies를 불러오는 코드이다.(ES6 참고)
    return  <section className="container">
      {isLoading  
      ?
      (<div className="loader">
        <span className="loader__text">Loading...</span>
        </div>)
      :(<div className="movies">
        {movies.map(movie =>(
      <Movie 
        key={movie.id} 
       id={movie.id} 
        year={movie.year} 
        title={movie.title} 
        summary={movie.summary} 
        poster={movie.medium_cover_image}
        genres={movie.genres}
       />
       ))}
      </div>)
      }
      </section>; 
     }

    }

export default App;

