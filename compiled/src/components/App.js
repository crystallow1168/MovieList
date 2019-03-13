import exampleMovieList from '../data/exampleMovieList.js';
import MovieList from './MovieList.js';
import Search from './Search.js';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentMovies: exampleMovieList
        };
    }

    handleSubmit(searchStr) {
        const movieResult = exampleMovieList.filter(movie => movie.title.toLowerCase().includes(searchStr));
        this.setState({
            currentMovies: movieResult
        });
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
                React.createElement(Search, { submit: this.handleSubmit.bind(this) })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiZXhhbXBsZU1vdmllTGlzdCIsIk1vdmllTGlzdCIsIlNlYXJjaCIsIkFwcCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwiY3VycmVudE1vdmllcyIsImhhbmRsZVN1Ym1pdCIsInNlYXJjaFN0ciIsIm1vdmllUmVzdWx0IiwiZmlsdGVyIiwibW92aWUiLCJ0aXRsZSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJzZXRTdGF0ZSIsInJlbmRlciIsImJpbmQiXSwibWFwcGluZ3MiOiJBQUFBLE9BQU9BLGdCQUFQLE1BQTZCLDZCQUE3QjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsZ0JBQXRCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixhQUFuQjs7QUFFQSxNQUFNQyxHQUFOLFNBQWtCQyxNQUFNQyxTQUF4QixDQUFrQztBQUM5QkMsZ0JBQVlDLEtBQVosRUFBbUI7QUFDZixjQUFNQSxLQUFOOztBQUVBLGFBQUtDLEtBQUwsR0FBYTtBQUNUQywyQkFBZVQ7QUFETixTQUFiO0FBR0g7O0FBRURVLGlCQUFhQyxTQUFiLEVBQXdCO0FBQ3BCLGNBQU1DLGNBQWNaLGlCQUFpQmEsTUFBakIsQ0FBeUJDLFNBQVNBLE1BQU1DLEtBQU4sQ0FBWUMsV0FBWixHQUEwQkMsUUFBMUIsQ0FBbUNOLFNBQW5DLENBQWxDLENBQXBCO0FBQ0EsYUFBS08sUUFBTCxDQUFjO0FBQ1ZULDJCQUFlRztBQURMLFNBQWQ7QUFHSDs7QUFHRE8sYUFBUztBQUNMLGVBQ0k7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKO0FBRUk7QUFBQTtBQUFBO0FBQUssb0NBQUMsTUFBRCxJQUFRLFFBQVEsS0FBS1QsWUFBTCxDQUFrQlUsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBaEI7QUFBTCxhQUZKO0FBR0k7QUFBQTtBQUFBO0FBQUssb0NBQUMsU0FBRCxJQUFXLFFBQVEsS0FBS1osS0FBTCxDQUFXQyxhQUE5QjtBQUFMO0FBSEosU0FESjtBQU9IO0FBekI2Qjs7QUE0QmxDLGVBQWVOLEdBQWYiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4YW1wbGVNb3ZpZUxpc3QgZnJvbSAnLi4vZGF0YS9leGFtcGxlTW92aWVMaXN0LmpzJ1xuaW1wb3J0IE1vdmllTGlzdCBmcm9tICcuL01vdmllTGlzdC5qcydcbmltcG9ydCBTZWFyY2ggZnJvbSAnLi9TZWFyY2guanMnXG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBjdXJyZW50TW92aWVzOiBleGFtcGxlTW92aWVMaXN0XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVTdWJtaXQoc2VhcmNoU3RyKSB7XG4gICAgICAgIGNvbnN0IG1vdmllUmVzdWx0ID0gZXhhbXBsZU1vdmllTGlzdC5maWx0ZXIoIG1vdmllID0+IG1vdmllLnRpdGxlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoU3RyKSlcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBjdXJyZW50TW92aWVzOiBtb3ZpZVJlc3VsdFxuICAgICAgICB9KVxuICAgIH1cblxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDE+TW92aWUgTGlzdDwvaDE+XG4gICAgICAgICAgICAgICAgPGRpdj48U2VhcmNoIHN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKX0vPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+PE1vdmllTGlzdCBtb3ZpZXM9e3RoaXMuc3RhdGUuY3VycmVudE1vdmllc30vPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcCAgIl19