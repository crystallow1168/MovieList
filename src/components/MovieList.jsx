import Movie from './Movie.js'

const MovieList = (props) => (
   <div className="list-movie">{props.movies.map(movie => <Movie eachMovie={movie}/>)}</div>
)

export default MovieList