class Movie extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            detailToggle: true
        }
    }

    handleDetailToggle() {
    
    }

    render() {
        return(
                <li className="list-group-item">
                <h5>{this.props.movie.title}</h5>
                    
                <div className="d-flex column ">
                    <div>
                        <div>Release Date</div>
                        <div>Run Time</div>
                        <div>Metascore</div>
                        <div>IMDBRating</div>
                        <span className="badge badge-primary badge-pill" 
                        onClick={() => this.props.toggleWatchedBadge(this.props.movie.title)}>
                        {this.props.movie.watched ? 'Watched' : 'Not Watched'}
                        </span>
                    </div>
                </div>

                </li>
        )
    }
} 

export default Movie;

