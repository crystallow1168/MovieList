import exampleMovieList from '../data/exampleMovieList.js';
import MovieList from './MovieList.js';
import AddMovie from './AddMovie.js';
import Search from './Search.js';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentMovies: [],
            userAdded: false
        };
    }

    handleSearch(searchStr) {
        const movieResult = this.state.currentMovies.filter(movie => movie.title.toLowerCase().includes(searchStr));
        this.setState({
            currentMovies: movieResult
        });
    }

    handleAdd(addStr) {
        if (this.state.userAdded) {
            this.setState(prevMovie => ({
                currentMovies: [...prevMovie.currentMovies, { title: addStr, watched: false }]
            }));
        } else {
            this.setState({
                currentMovies: [{ title: addStr, watched: false }],
                userAdded: true
            });
        }
    }

    toggleWatchedBadge(clickedMovie) {
        this.setState(prevState => ({
            currentMovies: prevState.currentMovies.map(movie => {
                if (movie.title === clickedMovie) {
                    movie.watched = !movie.watched;
                }
                return movie;
            })
        }));
    }

    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'h1',
                { className: 'font-weight-bolder' },
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
                React.createElement(MovieList, { movies: this.state.currentMovies, toggleWatchedBadge: this.toggleWatchedBadge.bind(this) })
            )
        );
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiZXhhbXBsZU1vdmllTGlzdCIsIk1vdmllTGlzdCIsIkFkZE1vdmllIiwiU2VhcmNoIiwiQXBwIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJjdXJyZW50TW92aWVzIiwidXNlckFkZGVkIiwiaGFuZGxlU2VhcmNoIiwic2VhcmNoU3RyIiwibW92aWVSZXN1bHQiLCJmaWx0ZXIiLCJtb3ZpZSIsInRpdGxlIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsInNldFN0YXRlIiwiaGFuZGxlQWRkIiwiYWRkU3RyIiwicHJldk1vdmllIiwid2F0Y2hlZCIsInRvZ2dsZVdhdGNoZWRCYWRnZSIsImNsaWNrZWRNb3ZpZSIsInByZXZTdGF0ZSIsIm1hcCIsInJlbmRlciIsImJpbmQiXSwibWFwcGluZ3MiOiJBQUFBLE9BQU9BLGdCQUFQLE1BQTZCLDZCQUE3QjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsZ0JBQXRCO0FBQ0EsT0FBT0MsUUFBUCxNQUFxQixlQUFyQjtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsYUFBbkI7O0FBRUEsTUFBTUMsR0FBTixTQUFrQkMsTUFBTUMsU0FBeEIsQ0FBa0M7QUFDOUJDLGdCQUFZQyxLQUFaLEVBQW1CO0FBQ2YsY0FBTUEsS0FBTjs7QUFFQSxhQUFLQyxLQUFMLEdBQWE7QUFDVEMsMkJBQWUsRUFETjtBQUVUQyx1QkFBVztBQUZGLFNBQWI7QUFJSDs7QUFFREMsaUJBQWFDLFNBQWIsRUFBd0I7QUFDcEIsY0FBTUMsY0FBYyxLQUFLTCxLQUFMLENBQVdDLGFBQVgsQ0FBeUJLLE1BQXpCLENBQWdDQyxTQUFTQSxNQUFNQyxLQUFOLENBQVlDLFdBQVosR0FBMEJDLFFBQTFCLENBQW1DTixTQUFuQyxDQUF6QyxDQUFwQjtBQUNBLGFBQUtPLFFBQUwsQ0FBYztBQUNWViwyQkFBZUk7QUFETCxTQUFkO0FBR0g7O0FBRURPLGNBQVVDLE1BQVYsRUFBa0I7QUFDZCxZQUFJLEtBQUtiLEtBQUwsQ0FBV0UsU0FBZixFQUEwQjtBQUN0QixpQkFBS1MsUUFBTCxDQUFlRyxTQUFELEtBQWdCO0FBQzFCYiwrQkFBZSxDQUFDLEdBQUdhLFVBQVViLGFBQWQsRUFBNkIsRUFBQ08sT0FBT0ssTUFBUixFQUFnQkUsU0FBUyxLQUF6QixFQUE3QjtBQURXLGFBQWhCLENBQWQ7QUFHSCxTQUpELE1BSU87QUFDSCxpQkFBS0osUUFBTCxDQUFjO0FBQ1ZWLCtCQUFlLENBQUMsRUFBQ08sT0FBT0ssTUFBUixFQUFnQkUsU0FBUyxLQUF6QixFQUFELENBREw7QUFFVmIsMkJBQVc7QUFGRCxhQUFkO0FBSUg7QUFDSjs7QUFHRGMsdUJBQW1CQyxZQUFuQixFQUFpQztBQUM3QixhQUFLTixRQUFMLENBQWNPLGNBQWM7QUFDeEJqQiwyQkFBZWlCLFVBQVVqQixhQUFWLENBQXdCa0IsR0FBeEIsQ0FBNkJaLEtBQUQsSUFBVztBQUNsRCxvQkFBSUEsTUFBTUMsS0FBTixLQUFnQlMsWUFBcEIsRUFBa0M7QUFDOUJWLDBCQUFNUSxPQUFOLEdBQWdCLENBQUNSLE1BQU1RLE9BQXZCO0FBQ0g7QUFDRCx1QkFBT1IsS0FBUDtBQUNILGFBTGM7QUFEUyxTQUFkLENBQWQ7QUFRSDs7QUFFRGEsYUFBUztBQUNMLGVBQ0k7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBLGtCQUFJLFdBQVUsb0JBQWQ7QUFBQTtBQUFBLGFBREo7QUFFSTtBQUFBO0FBQUE7QUFBSyxvQ0FBQyxRQUFELElBQVUsUUFBUSxLQUFLUixTQUFMLENBQWVTLElBQWYsQ0FBb0IsSUFBcEIsQ0FBbEI7QUFBTCxhQUZKO0FBR0k7QUFBQTtBQUFBO0FBQUssb0NBQUMsTUFBRCxJQUFRLFFBQVEsS0FBS2xCLFlBQUwsQ0FBa0JrQixJQUFsQixDQUF1QixJQUF2QixDQUFoQjtBQUFMLGFBSEo7QUFJSTtBQUFBO0FBQUE7QUFBSyxvQ0FBQyxTQUFELElBQVcsUUFBUSxLQUFLckIsS0FBTCxDQUFXQyxhQUE5QixFQUE2QyxvQkFBb0IsS0FBS2Usa0JBQUwsQ0FBd0JLLElBQXhCLENBQTZCLElBQTdCLENBQWpFO0FBQUw7QUFKSixTQURKO0FBUUg7QUFuRDZCOztBQXNEbEMsZUFBZTFCLEdBQWY7O0FBRUk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleGFtcGxlTW92aWVMaXN0IGZyb20gJy4uL2RhdGEvZXhhbXBsZU1vdmllTGlzdC5qcydcbmltcG9ydCBNb3ZpZUxpc3QgZnJvbSAnLi9Nb3ZpZUxpc3QuanMnXG5pbXBvcnQgQWRkTW92aWUgZnJvbSAnLi9BZGRNb3ZpZS5qcydcbmltcG9ydCBTZWFyY2ggZnJvbSAnLi9TZWFyY2guanMnXG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBjdXJyZW50TW92aWVzOiBbXSxcbiAgICAgICAgICAgIHVzZXJBZGRlZDogZmFsc2VcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZVNlYXJjaChzZWFyY2hTdHIpIHtcbiAgICAgICAgY29uc3QgbW92aWVSZXN1bHQgPSB0aGlzLnN0YXRlLmN1cnJlbnRNb3ZpZXMuZmlsdGVyKG1vdmllID0+IG1vdmllLnRpdGxlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoU3RyKSlcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBjdXJyZW50TW92aWVzOiBtb3ZpZVJlc3VsdFxuICAgICAgICB9KVxuICAgIH1cbiBcbiAgICBoYW5kbGVBZGQoYWRkU3RyKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnVzZXJBZGRlZCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSgocHJldk1vdmllKSA9PiAoe1xuICAgICAgICAgICAgICAgIGN1cnJlbnRNb3ZpZXM6IFsuLi5wcmV2TW92aWUuY3VycmVudE1vdmllcywge3RpdGxlOiBhZGRTdHIsIHdhdGNoZWQ6IGZhbHNlfV1cbiAgICAgICAgICAgIH0pKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgY3VycmVudE1vdmllczogW3t0aXRsZTogYWRkU3RyLCB3YXRjaGVkOiBmYWxzZX1dLFxuICAgICAgICAgICAgICAgIHVzZXJBZGRlZDogdHJ1ZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgdG9nZ2xlV2F0Y2hlZEJhZGdlKGNsaWNrZWRNb3ZpZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiAoe1xuICAgICAgICAgICAgY3VycmVudE1vdmllczogcHJldlN0YXRlLmN1cnJlbnRNb3ZpZXMubWFwKChtb3ZpZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChtb3ZpZS50aXRsZSA9PT0gY2xpY2tlZE1vdmllKSB7XG4gICAgICAgICAgICAgICAgICAgIG1vdmllLndhdGNoZWQgPSAhbW92aWUud2F0Y2hlZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1vdmllO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSkpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtYm9sZGVyXCI+TW92aWUgTGlzdDwvaDE+XG4gICAgICAgICAgICAgICAgPGRpdj48QWRkTW92aWUgc3VibWl0PXt0aGlzLmhhbmRsZUFkZC5iaW5kKHRoaXMpfS8+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj48U2VhcmNoIHN1Ym1pdD17dGhpcy5oYW5kbGVTZWFyY2guYmluZCh0aGlzKX0vPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+PE1vdmllTGlzdCBtb3ZpZXM9e3RoaXMuc3RhdGUuY3VycmVudE1vdmllc30gdG9nZ2xlV2F0Y2hlZEJhZGdlPXt0aGlzLnRvZ2dsZVdhdGNoZWRCYWRnZS5iaW5kKHRoaXMpfS8+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuXG4gICAgLy8gdGVzdEFQSSgpIHtcbiAgICAvLyAgICAgJC5nZXQoJ2h0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL3lvdXR1YmUvdjMvc2VhcmNoJywge1xuICAgIC8vICAgICAgICAgcGFydDogJ3NuaXBwZXQnLFxuICAgIC8vICAgICAgICAga2V5OiAnQUl6YVN5Q1ctZElJLW1ndTZfRWR2dml0U01UbUdLVEpxOVdmcURzJyxcbiAgICAvLyAgICAgICAgIHE6ICdoYXJyeScsXG4gICAgLy8gICAgICAgICBtYXhSZXN1bHRzOiAxMCxcbiAgICAvLyAgICAgICAgIHR5cGU6ICd2aWRlbycsXG4gICAgLy8gICAgICAgICB2aWRlb0VtYmVkZGFibGU6ICd0cnVlJ1xuICAgIC8vICAgICAgIH0pXG4gICAgLy8gICAgIC5kb25lKCh7aXRlbXN9KSA9PiB7XG4gICAgLy8gICAgICAgICAvLyBpZiAoY2FsbGJhY2spIHtcbiAgICAvLyAgICAgICAgIC8vIGNhbGxiYWNrKGl0ZW1zKTtcbiAgICAvLyAgICAgICAgIC8vIH1cbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKGl0ZW1zKVxuICAgIC8vICAgICB9KVxuICAgIC8vICAgICAuZmFpbCgoe3Jlc3BvbnNlSlNPTn0pID0+IHtcbiAgICAvLyAgICAgICAgIHJlc3BvbnNlSlNPTi5lcnJvci5lcnJvcnMuZm9yRWFjaCgoZXJyKSA9PlxuICAgIC8vICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgLy8gICAgICAgICApO1xuICAgIC8vICAgICB9KTtcbiAgICAvLyB9Il19