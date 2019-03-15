const Movie = (props) => (
    <li className="list-group-item d-flex justify-content-between align-items-center">
        {props.movie.title}
        <span className="badge badge-primary badge-pill" 

        onClick={() => props.submit(props.movie.title)}>
        {props.movie.watched ? 'Watched' : 'Not Watched'}
        </span>
    </li>
)

export default Movie;

