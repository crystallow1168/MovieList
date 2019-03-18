class Movie extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            movieDetails: null,
            detailToggle: false
        };
    }

    getMovie() {
        console.log(this.props);
        const getMovieTitle = this.props.movie.title;
        $.get('https://api.themoviedb.org/3/search/movie', {
            api_key: 'a00b7e150ec94b7216ff2a3cbf8f406d',
            query: getMovieTitle
        }).done(({ results }) => {
            // if (callback) {
            // callback(items);
            // }
            console.log(results);
        }).fail(({ responseJSON }) => {
            responseJSON.error.errors.forEach(err => console.error(err));
        });
    }

    handleDetailToggle() {
        this.setState({
            detailToggle: !this.state.detailToggle
        });
    }

    render() {
        const toggleDetailStatus = React.createElement(
            'div',
            { className: 'd-flex column ' },
            React.createElement(
                'div',
                null,
                React.createElement(
                    'div',
                    null,
                    'Release Date: '
                ),
                React.createElement(
                    'div',
                    null,
                    'Run Time: '
                ),
                React.createElement(
                    'div',
                    null,
                    'Metascore: '
                ),
                React.createElement(
                    'div',
                    null,
                    'IMDBRating: '
                ),
                React.createElement(
                    'span',
                    { className: 'badge badge-primary badge-pill',
                        onClick: () => this.props.toggleWatchedBadge(this.props.movie.title) },
                    this.props.movie.watched ? 'Watched' : 'Not Watched'
                )
            )
        );

        return React.createElement(
            'li',
            { className: 'list-group-item' },
            React.createElement(
                'div',
                { className: 'd-flex justify-content-between',
                    onClick: () => this.handleDetailToggle() },
                React.createElement(
                    'h5',
                    null,
                    this.props.movie.title
                )
            ),
            React.createElement(
                'div',
                { className: this.state.detailToggle ? '' : 'd-none' },
                toggleDetailStatus
            ),
            React.createElement(
                'button',
                { onClick: this.getMovie },
                'test'
            )
        );
    }
}

export default Movie;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01vdmllLmpzeCJdLCJuYW1lcyI6WyJNb3ZpZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwibW92aWVEZXRhaWxzIiwiZGV0YWlsVG9nZ2xlIiwiZ2V0TW92aWUiLCJjb25zb2xlIiwibG9nIiwiZ2V0TW92aWVUaXRsZSIsIm1vdmllIiwidGl0bGUiLCIkIiwiZ2V0IiwiYXBpX2tleSIsInF1ZXJ5IiwiZG9uZSIsInJlc3VsdHMiLCJmYWlsIiwicmVzcG9uc2VKU09OIiwiZXJyb3IiLCJlcnJvcnMiLCJmb3JFYWNoIiwiZXJyIiwiaGFuZGxlRGV0YWlsVG9nZ2xlIiwic2V0U3RhdGUiLCJyZW5kZXIiLCJ0b2dnbGVEZXRhaWxTdGF0dXMiLCJ0b2dnbGVXYXRjaGVkQmFkZ2UiLCJ3YXRjaGVkIl0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxLQUFOLFNBQW9CQyxNQUFNQyxTQUExQixDQUFvQztBQUNoQ0MsZ0JBQVlDLEtBQVosRUFBbUI7QUFDZixjQUFNQSxLQUFOOztBQUVBLGFBQUtDLEtBQUwsR0FBYTtBQUNUQywwQkFBYyxJQURMO0FBRVRDLDBCQUFjO0FBRkwsU0FBYjtBQUlIOztBQUVEQyxlQUFXO0FBQ1BDLGdCQUFRQyxHQUFSLENBQVksS0FBS04sS0FBakI7QUFDQSxjQUFNTyxnQkFBZ0IsS0FBS1AsS0FBTCxDQUFXUSxLQUFYLENBQWlCQyxLQUF2QztBQUNBQyxVQUFFQyxHQUFGLENBQU0sMkNBQU4sRUFBbUQ7QUFDL0NDLHFCQUFTLGtDQURzQztBQUUvQ0MsbUJBQU9OO0FBRndDLFNBQW5ELEVBSUNPLElBSkQsQ0FJTSxDQUFDLEVBQUNDLE9BQUQsRUFBRCxLQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBVixvQkFBUUMsR0FBUixDQUFZUyxPQUFaO0FBQ0gsU0FURCxFQVVDQyxJQVZELENBVU0sQ0FBQyxFQUFDQyxZQUFELEVBQUQsS0FBb0I7QUFDdEJBLHlCQUFhQyxLQUFiLENBQW1CQyxNQUFuQixDQUEwQkMsT0FBMUIsQ0FBbUNDLEdBQUQsSUFDbENoQixRQUFRYSxLQUFSLENBQWNHLEdBQWQsQ0FEQTtBQUdILFNBZEQ7QUFlSDs7QUFFREMseUJBQXFCO0FBQ2pCLGFBQUtDLFFBQUwsQ0FBZTtBQUNYcEIsMEJBQWMsQ0FBQyxLQUFLRixLQUFMLENBQVdFO0FBRGYsU0FBZjtBQUdIOztBQUVEcUIsYUFBUztBQUNMLGNBQU1DLHFCQUNOO0FBQUE7QUFBQSxjQUFLLFdBQVUsZ0JBQWY7QUFDUTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKO0FBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSjtBQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEo7QUFJSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpKO0FBS0k7QUFBQTtBQUFBLHNCQUFNLFdBQVUsZ0NBQWhCO0FBQ0EsaUNBQVMsTUFBTSxLQUFLekIsS0FBTCxDQUFXMEIsa0JBQVgsQ0FBOEIsS0FBSzFCLEtBQUwsQ0FBV1EsS0FBWCxDQUFpQkMsS0FBL0MsQ0FEZjtBQUVDLHlCQUFLVCxLQUFMLENBQVdRLEtBQVgsQ0FBaUJtQixPQUFqQixHQUEyQixTQUEzQixHQUF1QztBQUZ4QztBQUxKO0FBRFIsU0FEQTs7QUFlQSxlQUNJO0FBQUE7QUFBQSxjQUFJLFdBQVUsaUJBQWQ7QUFDQTtBQUFBO0FBQUEsa0JBQUssV0FBVSxnQ0FBZjtBQUNBLDZCQUFTLE1BQU0sS0FBS0wsa0JBQUwsRUFEZjtBQUVJO0FBQUE7QUFBQTtBQUFLLHlCQUFLdEIsS0FBTCxDQUFXUSxLQUFYLENBQWlCQztBQUF0QjtBQUZKLGFBREE7QUFLQTtBQUFBO0FBQUEsa0JBQUssV0FBVyxLQUFLUixLQUFMLENBQVdFLFlBQVgsR0FBMEIsRUFBMUIsR0FBK0IsUUFBL0M7QUFDS3NCO0FBREwsYUFMQTtBQVFBO0FBQUE7QUFBQSxrQkFBUSxTQUFTLEtBQUtyQixRQUF0QjtBQUFBO0FBQUE7QUFSQSxTQURKO0FBWUg7QUFoRStCOztBQW1FcEMsZUFBZVIsS0FBZiIsImZpbGUiOiJNb3ZpZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIE1vdmllIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgbW92aWVEZXRhaWxzOiBudWxsLFxuICAgICAgICAgICAgZGV0YWlsVG9nZ2xlOiBmYWxzZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0TW92aWUoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMpXG4gICAgICAgIGNvbnN0IGdldE1vdmllVGl0bGUgPSB0aGlzLnByb3BzLm1vdmllLnRpdGxlXG4gICAgICAgICQuZ2V0KCdodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zL3NlYXJjaC9tb3ZpZScsIHtcbiAgICAgICAgICAgIGFwaV9rZXk6ICdhMDBiN2UxNTBlYzk0YjcyMTZmZjJhM2NiZjhmNDA2ZCcsXG4gICAgICAgICAgICBxdWVyeTogZ2V0TW92aWVUaXRsZVxuICAgICAgICAgIH0pXG4gICAgICAgIC5kb25lKCh7cmVzdWx0c30pID0+IHtcbiAgICAgICAgICAgIC8vIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgLy8gY2FsbGJhY2soaXRlbXMpO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0cylcbiAgICAgICAgfSlcbiAgICAgICAgLmZhaWwoKHtyZXNwb25zZUpTT059KSA9PiB7XG4gICAgICAgICAgICByZXNwb25zZUpTT04uZXJyb3IuZXJyb3JzLmZvckVhY2goKGVycikgPT5cbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaGFuZGxlRGV0YWlsVG9nZ2xlKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlICh7XG4gICAgICAgICAgICBkZXRhaWxUb2dnbGU6ICF0aGlzLnN0YXRlLmRldGFpbFRvZ2dsZVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgdG9nZ2xlRGV0YWlsU3RhdHVzID0gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBjb2x1bW4gXCI+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5SZWxlYXNlIERhdGU6IDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlJ1biBUaW1lOiA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5NZXRhc2NvcmU6IDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PklNREJSYXRpbmc6IDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS1wcmltYXJ5IGJhZGdlLXBpbGxcIiBcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy50b2dnbGVXYXRjaGVkQmFkZ2UodGhpcy5wcm9wcy5tb3ZpZS50aXRsZSl9PlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5tb3ZpZS53YXRjaGVkID8gJ1dhdGNoZWQnIDogJ05vdCBXYXRjaGVkJ31cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuXG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW1cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlRGV0YWlsVG9nZ2xlKCl9PlxuICAgICAgICAgICAgICAgIDxoNT57dGhpcy5wcm9wcy5tb3ZpZS50aXRsZX08L2g1PlxuICAgICAgICAgICAgPC9kaXY+ICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuZGV0YWlsVG9nZ2xlID8gJycgOiAnZC1ub25lJ30+XG4gICAgICAgICAgICAgICAge3RvZ2dsZURldGFpbFN0YXR1c31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmdldE1vdmllfT50ZXN0PC9idXR0b24+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICApXG4gICAgfVxufSBcblxuZXhwb3J0IGRlZmF1bHQgTW92aWU7XG5cbiJdfQ==