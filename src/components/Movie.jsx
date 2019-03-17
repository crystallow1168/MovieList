class Movie extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            detailToggle: false
        }
    }

    render() {
        return(
            <div>
                <li className="list-group-item d-flex justify-content-between align-items-center"
                 >
                    {this.props.movie.title}
                    <span className="badge badge-primary badge-pill" 
                    onClick={() => this.props.toggleWatchedBadge(this.props.movie.title)}>
                    {this.props.movie.watched ? 'Watched' : 'Not Watched'}
                    </span>

                <div className={this.state.showDetail ? '' : 'd-none'}>
                    <div>
                        <div>Release Date</div>
                        <div>Run Time</div>
                        <div>Metascore</div>
                        <div>IMDBRating</div>
                    </div>
                </div>
                </li>
            </div>
        )
    }
} 

export default Movie;
