import Movie from './Movie.js'

const MovieList = (props) => (
   
   <ul className="nav nav-tabs">
      <li className="nav-item">
         <a className="nav-link active" href="#">To Watch</a>
         <ul className="list-group">
            {props.movies.map(movie => 
            <Movie movie={movie} 
            key={movie.title}
            toggleWatchedBadge={props.toggleWatchedBadge}
            />)}
         </ul>
      </li>
      
      <li>
      <a className="nav-link active" href="#">Watched</a>
         <ul className="list-group">
            {props.movies.map(movie => 
            <Movie movie={movie} 
            key={movie.title}
            toggleWatchedBadge={props.toggleWatchedBadge}
            />)}
         </ul>
      </li>
   </ul>
)


export default MovieList;
