import exampleMovieList from '../data/exampleMovieList.js'
import MovieList from './MovieList.js'
import AddMovie from './AddMovie.js'
import Search from './Search.js'

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentMovies: exampleMovieList,
            userAdded: false,
            watched: false
        }
    }

    handleSearch(searchStr) {
        const movieResult = exampleMovieList.filter(movie => movie.title.toLowerCase().includes(searchStr))
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
                currentMovies: [{title: addStr}],
                userAdded:true
            })
        }
    }

    toggleWatched(clickedMovie) {
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
                <p className="font-weight-bolder">Movie List</p>
                <div><AddMovie submit={this.handleAdd.bind(this)}/></div>
                <div><Search submit={this.handleSearch.bind(this)}/></div>
                <div><MovieList movies={this.state.currentMovies} submit={this.toggleWatched.bind(this)}/></div>
            </div>
        )
    }
}

export default App;
