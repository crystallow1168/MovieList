import exampleMovieList from '../data/exampleMovieList.js'
import MovieList from './MovieList.js'
import AddMovie from './AddMovie.js'
import Search from './Search.js'

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentMovies: exampleMovieList,
            userAdded: false
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
                
                currentMovies: [...prevMovie.currentMovies, {title: addStr}]
            }))
        } else {
            this.setState({
                currentMovies: [{title: addStr}],
                userAdded:true
            })
        }
    }

    render() {
        return (
            <div>
                <h1>Movie List</h1>
                <div><AddMovie submit={this.handleAdd.bind(this)}/></div>
                <div><Search submit={this.handleSearch.bind(this)}/></div>
                <div><MovieList movies={this.state.currentMovies}/></div>
            </div>
        )
    }
}

export default App  