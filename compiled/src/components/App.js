import exampleMovieList from '../data/exampleMovieList.js';
import MovieList from './MovieList.js';
import AddMovie from './AddMovie.js';
import Search from './Search.js';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentMovies: exampleMovieList,
            userAdded: false
        };
    }

    handleSearch(searchStr) {
        const movieResult = exampleMovieList.filter(movie => movie.title.toLowerCase().includes(searchStr));
        this.setState({
            currentMovies: movieResult
        });
    }

    handleAdd(addStr) {
        if (this.state.userAdded) {
            this.setState(prevMovie => ({
                currentMovies: [...prevMovie.movies, { title: addStr }]
            }));
        } else {
            this.setState({
                currentMovies: [{ title: addStr }],
                userAdded: true
            });
        }
    }

    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'h1',
                null,
                'Movie List'
            ),
            React.createElement(
                'div',
                null,
                React.createElement(AddMovie, { submit: this.handleAdd.bind(this) })
            ),
            React.createElement(
                'div',
                null,
                React.createElement(Search, { submit: this.handleSearch.bind(this) })
            ),
            React.createElement(
                'div',
                null,
                React.createElement(MovieList, { movies: this.state.currentMovies })
            )
        );
    }
}

export default App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiZXhhbXBsZU1vdmllTGlzdCIsIk1vdmllTGlzdCIsIkFkZE1vdmllIiwiU2VhcmNoIiwiQXBwIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJjdXJyZW50TW92aWVzIiwidXNlckFkZGVkIiwiaGFuZGxlU2VhcmNoIiwic2VhcmNoU3RyIiwibW92aWVSZXN1bHQiLCJmaWx0ZXIiLCJtb3ZpZSIsInRpdGxlIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsInNldFN0YXRlIiwiaGFuZGxlQWRkIiwiYWRkU3RyIiwicHJldk1vdmllIiwibW92aWVzIiwicmVuZGVyIiwiYmluZCJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsZ0JBQVAsTUFBNkIsNkJBQTdCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixnQkFBdEI7QUFDQSxPQUFPQyxRQUFQLE1BQXFCLGVBQXJCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixhQUFuQjs7QUFFQSxNQUFNQyxHQUFOLFNBQWtCQyxNQUFNQyxTQUF4QixDQUFrQztBQUM5QkMsZ0JBQVlDLEtBQVosRUFBbUI7QUFDZixjQUFNQSxLQUFOOztBQUVBLGFBQUtDLEtBQUwsR0FBYTtBQUNUQywyQkFBZVYsZ0JBRE47QUFFVFcsdUJBQVc7QUFGRixTQUFiO0FBSUg7O0FBRURDLGlCQUFhQyxTQUFiLEVBQXdCO0FBQ3BCLGNBQU1DLGNBQWNkLGlCQUFpQmUsTUFBakIsQ0FBeUJDLFNBQVNBLE1BQU1DLEtBQU4sQ0FBWUMsV0FBWixHQUEwQkMsUUFBMUIsQ0FBbUNOLFNBQW5DLENBQWxDLENBQXBCO0FBQ0EsYUFBS08sUUFBTCxDQUFjO0FBQ1ZWLDJCQUFlSTtBQURMLFNBQWQ7QUFHSDs7QUFFRE8sY0FBVUMsTUFBVixFQUFrQjtBQUNkLFlBQUcsS0FBS2IsS0FBTCxDQUFXRSxTQUFkLEVBQXlCO0FBQ3JCLGlCQUFLUyxRQUFMLENBQWVHLFNBQUQsS0FBZ0I7QUFDMUJiLCtCQUFlLENBQUMsR0FBR2EsVUFBVUMsTUFBZCxFQUFzQixFQUFDUCxPQUFPSyxNQUFSLEVBQXRCO0FBRFcsYUFBaEIsQ0FBZDtBQUdILFNBSkQsTUFJTztBQUNILGlCQUFLRixRQUFMLENBQWM7QUFDVlYsK0JBQWUsQ0FBQyxFQUFDTyxPQUFPSyxNQUFSLEVBQUQsQ0FETDtBQUVWWCwyQkFBVTtBQUZBLGFBQWQ7QUFJSDtBQUNKOztBQUVEYyxhQUFTO0FBQ0wsZUFDSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREo7QUFFSTtBQUFBO0FBQUE7QUFBSyxvQ0FBQyxRQUFELElBQVUsUUFBUSxLQUFLSixTQUFMLENBQWVLLElBQWYsQ0FBb0IsSUFBcEIsQ0FBbEI7QUFBTCxhQUZKO0FBR0k7QUFBQTtBQUFBO0FBQUssb0NBQUMsTUFBRCxJQUFRLFFBQVEsS0FBS2QsWUFBTCxDQUFrQmMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBaEI7QUFBTCxhQUhKO0FBSUk7QUFBQTtBQUFBO0FBQUssb0NBQUMsU0FBRCxJQUFXLFFBQVEsS0FBS2pCLEtBQUwsQ0FBV0MsYUFBOUI7QUFBTDtBQUpKLFNBREo7QUFRSDtBQXZDNkI7O0FBMENsQyxlQUFlTixHQUFmIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleGFtcGxlTW92aWVMaXN0IGZyb20gJy4uL2RhdGEvZXhhbXBsZU1vdmllTGlzdC5qcydcbmltcG9ydCBNb3ZpZUxpc3QgZnJvbSAnLi9Nb3ZpZUxpc3QuanMnXG5pbXBvcnQgQWRkTW92aWUgZnJvbSAnLi9BZGRNb3ZpZS5qcydcbmltcG9ydCBTZWFyY2ggZnJvbSAnLi9TZWFyY2guanMnXG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBjdXJyZW50TW92aWVzOiBleGFtcGxlTW92aWVMaXN0LFxuICAgICAgICAgICAgdXNlckFkZGVkOiBmYWxzZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlU2VhcmNoKHNlYXJjaFN0cikge1xuICAgICAgICBjb25zdCBtb3ZpZVJlc3VsdCA9IGV4YW1wbGVNb3ZpZUxpc3QuZmlsdGVyKCBtb3ZpZSA9PiBtb3ZpZS50aXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFN0cikpXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgY3VycmVudE1vdmllczogbW92aWVSZXN1bHRcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBoYW5kbGVBZGQoYWRkU3RyKSB7XG4gICAgICAgIGlmKHRoaXMuc3RhdGUudXNlckFkZGVkKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKChwcmV2TW92aWUpID0+ICh7XG4gICAgICAgICAgICAgICAgY3VycmVudE1vdmllczogWy4uLnByZXZNb3ZpZS5tb3ZpZXMsIHt0aXRsZTogYWRkU3RyfV1cbiAgICAgICAgICAgIH0pKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgY3VycmVudE1vdmllczogW3t0aXRsZTogYWRkU3RyfV0sXG4gICAgICAgICAgICAgICAgdXNlckFkZGVkOnRydWVcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoMT5Nb3ZpZSBMaXN0PC9oMT5cbiAgICAgICAgICAgICAgICA8ZGl2PjxBZGRNb3ZpZSBzdWJtaXQ9e3RoaXMuaGFuZGxlQWRkLmJpbmQodGhpcyl9Lz48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PjxTZWFyY2ggc3VibWl0PXt0aGlzLmhhbmRsZVNlYXJjaC5iaW5kKHRoaXMpfS8+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj48TW92aWVMaXN0IG1vdmllcz17dGhpcy5zdGF0ZS5jdXJyZW50TW92aWVzfS8+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwICAiXX0=