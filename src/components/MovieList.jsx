import Movie from './Movie.js'

const MovieList = (props) => (
   <ul className="list-group">
      {props.movies.map(movie => 
      <Movie movie={movie} 
      key={movie.title}
      
      submit={props.submit}
      />)}
   </ul>
)

export default MovieList;


