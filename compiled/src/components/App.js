import exampleMovieList from '../data/exampleMovieList.js';
import MovieList from './MovieList.js';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentMovies: exampleMovieList
        };
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
                React.createElement(MovieList, { movies: this.state.currentMovies })
            )
        );
    }
}

export default App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiZXhhbXBsZU1vdmllTGlzdCIsIk1vdmllTGlzdCIsIkFwcCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwiY3VycmVudE1vdmllcyIsInJlbmRlciJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsZ0JBQVAsTUFBNkIsNkJBQTdCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixnQkFBdEI7O0FBRUEsTUFBTUMsR0FBTixTQUFrQkMsTUFBTUMsU0FBeEIsQ0FBa0M7QUFDOUJDLGdCQUFZQyxLQUFaLEVBQW1CO0FBQ2YsY0FBTUEsS0FBTjs7QUFFQSxhQUFLQyxLQUFMLEdBQWE7QUFDVEMsMkJBQWVSO0FBRE4sU0FBYjtBQUdIOztBQUVEUyxhQUFTO0FBQ0wsZUFDSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREo7QUFFSTtBQUFBO0FBQUE7QUFBSyxvQ0FBQyxTQUFELElBQVcsUUFBUSxLQUFLRixLQUFMLENBQVdDLGFBQTlCO0FBQUw7QUFGSixTQURKO0FBTUg7QUFoQjZCOztBQW1CbEMsZUFBZU4sR0FBZiIsImZpbGUiOiJBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhhbXBsZU1vdmllTGlzdCBmcm9tICcuLi9kYXRhL2V4YW1wbGVNb3ZpZUxpc3QuanMnXG5pbXBvcnQgTW92aWVMaXN0IGZyb20gJy4vTW92aWVMaXN0LmpzJ1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgY3VycmVudE1vdmllczogZXhhbXBsZU1vdmllTGlzdFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDE+TW92aWUgTGlzdDwvaDE+XG4gICAgICAgICAgICAgICAgPGRpdj48TW92aWVMaXN0IG1vdmllcz17dGhpcy5zdGF0ZS5jdXJyZW50TW92aWVzfS8+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwICJdfQ==