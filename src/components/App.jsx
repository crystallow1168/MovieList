import exampleMovieList from '../data/exampleMovieList.js'
import MovieList from './MovieList.js'
import AddMovie from './AddMovie.js'
import Search from './Search.js'

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentMovies: [],
            userAdded: false
        }
    }

    handleSearch(searchStr) {
        const movieResult = this.state.currentMovies.filter(movie => movie.title.toLowerCase().includes(searchStr))
        this.setState({
            currentMovies: movieResult
        })
    }
 
    handleAdd(addStr) {
        if (this.state.userAdded) {
            this.setState((prevMovie) => ({
                currentMovies: [...prevMovie.currentMovies, {title: addStr, watched: false}]
            }))
        } else {
            this.setState({
                currentMovies: [{title: addStr, watched: false}],
                userAdded: true
            })
        }
    }


    toggleWatchedBadge(clickedMovie) {
        this.setState(prevState => ({
            currentMovies: prevState.currentMovies.map((movie) => {
                if (movie.title === clickedMovie) {
                    movie.watched = !movie.watched;
                }
                return movie;
            })
        }))
    }

    render() {
        return (
            <div>
                <h1 className="font-weight-bolder">Movie List</h1>
                <div><AddMovie submit={this.handleAdd.bind(this)}/></div>
                <div><Search submit={this.handleSearch.bind(this)}/></div>
                <div><MovieList movies={this.state.currentMovies} toggleWatchedBadge={this.toggleWatchedBadge.bind(this)}/></div>
            </div>
        )
    }
}

export default App;

    // testAPI() {
    //     $.get('https://www.googleapis.com/youtube/v3/search', {
    //         part: 'snippet',
    //         key: 'AIzaSyCW-dII-mgu6_EdvvitSMTmGKTJq9WfqDs',
    //         q: 'harry',
    //         maxResults: 10,
    //         type: 'video',
    //         videoEmbeddable: 'true'
    //       })
    //     .done(({items}) => {
    //         // if (callback) {
    //         // callback(items);
    //         // }
    //         console.log(items)
    //     })
    //     .fail(({responseJSON}) => {
    //         responseJSON.error.errors.forEach((err) =>
    //         console.error(err)
    //         );
    //     });
    // }