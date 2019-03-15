const Movie = (props) => (
    <li className="list-group-item d-flex justify-content-between align-items-center">
        {props.movie.title}
        <span className="badge badge-primary badge-pill"></span>
        <button>Hello</button>
    </li>

)

export default Movie;
