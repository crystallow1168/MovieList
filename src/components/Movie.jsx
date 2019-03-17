class Movie extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            detailToggle: false
        }
    }

    handleDetailToggle() {
        this.setState ({
            detailToggle: !this.state.detailToggle
        })
    }

    render() {
        const toggleDetailStatus = (
        <div className="d-flex column ">
                <div>
                    <div>Release Date: </div>
                    <div>Run Time: </div>
                    <div>Metascore: </div>
                    <div>IMDBRating: </div>
                    <span className="badge badge-primary badge-pill" 
                    onClick={() => this.props.toggleWatchedBadge(this.props.movie.title)}>
                    {this.props.movie.watched ? 'Watched' : 'Not Watched'}
                    </span>
                </div>
        </div>
        )

        return(
            <li className="list-group-item">
            <div className="d-flex justify-content-between"
          onClick={() => this.handleDetailToggle()}>
                <h5>{this.props.movie.title}</h5>
            </div>    
            <div className={this.state.detailToggle ? '' : 'd-none'}>
                {toggleDetailStatus}
            </div>
            </li>
        )
    }
} 

export default Movie;

