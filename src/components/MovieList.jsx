import Movie from './Movie.js'

const MovieList = (props) => (
   <ul className="list-group">
      {props.movies.map(movie => <Movie movie={movie} key={movie.title}/>)}
   </ul>
)

export default MovieList

