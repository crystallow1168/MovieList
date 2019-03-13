import exampleMovieList from '../data/exampleMovieList.js'
import MovieList from './MovieList.js'
import Search from './Search.js'

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentMovies: exampleMovieList
        }
    }

    handleSubmit(searchStr) {
        const movieResult = exampleMovieList.filter( movie => movie.title.toLowerCase().includes(searchStr))
        this.setState({
            currentMovies: movieResult
        })
    }


    render() {
        return (
            <div>
                <h1>Movie List</h1>
                <div><Search submit={this.handleSubmit.bind(this)}/></div>
                <div><MovieList movies={this.state.currentMovies}/></div>
            </div>
        )
    }
}

export default App  