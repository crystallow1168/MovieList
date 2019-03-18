import Movie from './Movie.js';

class MovieList extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         toWatchTabClicked: true,
         watchedTabClicked: false
      };
   }

   handleTabClicked() {
      this.setState({
         toWatchTabClicked: !this.state.toWatchTabClicked,
         watchedTabClicked: !this.state.watchedTabClicked
      });
   }

   render() {

      if (this.state.toWatchTabClicked === true) {
         return React.createElement(
            "div",
            null,
            React.createElement(
               "ul",
               { className: "nav nav-tabs" },
               React.createElement(
                  "li",
                  { className: "nav flex-row" },
                  React.createElement(
                     "a",
                     { className: `nav-link `, onClick: () => this.handleTabClicked(), href: "#" },
                     "To Watch"
                  ),
                  React.createElement(
                     "a",
                     { className: `nav-link active`, onClick: () => this.handleTabClicked(), href: "#" },
                     "Watched"
                  )
               )
            ),
            React.createElement(
               "ul",
               { className: "list-group flex-column" },
               this.props.movies.filter(movie => movie.watched === false).map(movie => React.createElement(Movie, { movie: movie,
                  key: movie.toWatchTitle,
                  toggleWatchedBadge: this.props.toggleWatchedBadge
               }))
            )
         );
      } else if (this.state.watchedTabClicked === true) {

         return React.createElement(
            "div",
            null,
            React.createElement(
               "ul",
               { className: "nav nav-tabs" },
               React.createElement(
                  "li",
                  { className: "nav flex-row" },
                  React.createElement(
                     "a",
                     { className: `nav-link active`, onClick: () => this.handleTabClicked(), href: "#" },
                     "To Watch"
                  ),
                  React.createElement(
                     "a",
                     { className: `nav-link `, onClick: () => this.handleTabClicked(), href: "#" },
                     "Watched"
                  )
               )
            ),
            React.createElement(
               "ul",
               { className: "list-group" },
               this.props.movies.filter(movie => movie.watched === true).map(movie => React.createElement(Movie, { movie: movie,
                  key: movie.toWatchTitle,
                  toggleWatchedBadge: this.props.toggleWatchedBadge
               }))
            )
         );
      }
   }
}

export default MovieList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01vdmllTGlzdC5qc3giXSwibmFtZXMiOlsiTW92aWUiLCJNb3ZpZUxpc3QiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzdGF0ZSIsInRvV2F0Y2hUYWJDbGlja2VkIiwid2F0Y2hlZFRhYkNsaWNrZWQiLCJoYW5kbGVUYWJDbGlja2VkIiwic2V0U3RhdGUiLCJyZW5kZXIiLCJtb3ZpZXMiLCJmaWx0ZXIiLCJtb3ZpZSIsIndhdGNoZWQiLCJtYXAiLCJ0b1dhdGNoVGl0bGUiLCJ0b2dnbGVXYXRjaGVkQmFkZ2UiXSwibWFwcGluZ3MiOiJBQUFBLE9BQU9BLEtBQVAsTUFBa0IsWUFBbEI7O0FBRUEsTUFBTUMsU0FBTixTQUF3QkMsTUFBTUMsU0FBOUIsQ0FBd0M7QUFDckNDLGVBQVlDLEtBQVosRUFBbUI7QUFDaEIsWUFBTUEsS0FBTjs7QUFFQSxXQUFLQyxLQUFMLEdBQWE7QUFDVkMsNEJBQW1CLElBRFQ7QUFFVkMsNEJBQW1CO0FBRlQsT0FBYjtBQUlGOztBQUVEQyxzQkFBbUI7QUFDaEIsV0FBS0MsUUFBTCxDQUFlO0FBQ1pILDRCQUFtQixDQUFFLEtBQUtELEtBQUwsQ0FBV0MsaUJBRHBCO0FBRVpDLDRCQUFtQixDQUFFLEtBQUtGLEtBQUwsQ0FBV0U7QUFGcEIsT0FBZjtBQUlGOztBQUVERyxZQUFTOztBQUVOLFVBQUksS0FBS0wsS0FBTCxDQUFXQyxpQkFBWCxLQUFpQyxJQUFyQyxFQUEyQztBQUN4QyxnQkFDRztBQUFBO0FBQUE7QUFDRztBQUFBO0FBQUEsaUJBQUksV0FBVSxjQUFkO0FBQ0c7QUFBQTtBQUFBLG9CQUFJLFdBQVUsY0FBZDtBQUNHO0FBQUE7QUFBQSx1QkFBRyxXQUFZLFdBQWYsRUFBMkIsU0FBUyxNQUFLLEtBQUtFLGdCQUFMLEVBQXpDLEVBQWtFLE1BQUssR0FBdkU7QUFBQTtBQUFBLG1CQURIO0FBRUc7QUFBQTtBQUFBLHVCQUFHLFdBQVksaUJBQWYsRUFBaUMsU0FBUyxNQUFLLEtBQUtBLGdCQUFMLEVBQS9DLEVBQXdFLE1BQUssR0FBN0U7QUFBQTtBQUFBO0FBRkg7QUFESCxhQURIO0FBT0c7QUFBQTtBQUFBLGlCQUFJLFdBQVUsd0JBQWQ7QUFDSyxvQkFBS0osS0FBTCxDQUFXTyxNQUFYLENBQWtCQyxNQUFsQixDQUF5QkMsU0FBU0EsTUFBTUMsT0FBTixLQUFrQixLQUFwRCxDQUFELENBQTZEQyxHQUE3RCxDQUFpRUYsU0FDL0Qsb0JBQUMsS0FBRCxJQUFPLE9BQU9BLEtBQWQ7QUFDQSx1QkFBS0EsTUFBTUcsWUFEWDtBQUVBLHNDQUFvQixLQUFLWixLQUFMLENBQVdhO0FBRi9CLGlCQURGO0FBREo7QUFQSCxVQURIO0FBa0JGLE9BbkJELE1BbUJPLElBQUksS0FBS1osS0FBTCxDQUFXRSxpQkFBWCxLQUFpQyxJQUFyQyxFQUE0Qzs7QUFFaEQsZ0JBQ0c7QUFBQTtBQUFBO0FBQ0c7QUFBQTtBQUFBLGlCQUFJLFdBQVUsY0FBZDtBQUNHO0FBQUE7QUFBQSxvQkFBSSxXQUFVLGNBQWQ7QUFDRztBQUFBO0FBQUEsdUJBQUcsV0FBWSxpQkFBZixFQUFpQyxTQUFTLE1BQUssS0FBS0MsZ0JBQUwsRUFBL0MsRUFBd0UsTUFBSyxHQUE3RTtBQUFBO0FBQUEsbUJBREg7QUFFRztBQUFBO0FBQUEsdUJBQUcsV0FBWSxXQUFmLEVBQTJCLFNBQVMsTUFBSyxLQUFLQSxnQkFBTCxFQUF6QyxFQUFrRSxNQUFLLEdBQXZFO0FBQUE7QUFBQTtBQUZIO0FBREgsYUFESDtBQU9HO0FBQUE7QUFBQSxpQkFBSSxXQUFVLFlBQWQ7QUFDUSxvQkFBS0osS0FBTCxDQUFXTyxNQUFYLENBQWtCQyxNQUFsQixDQUF5QkMsU0FBU0EsTUFBTUMsT0FBTixLQUFrQixJQUFwRCxDQUFELENBQTREQyxHQUE1RCxDQUFnRUYsU0FDakUsb0JBQUMsS0FBRCxJQUFPLE9BQU9BLEtBQWQ7QUFDQSx1QkFBS0EsTUFBTUcsWUFEWDtBQUVBLHNDQUFvQixLQUFLWixLQUFMLENBQVdhO0FBRi9CLGlCQURDO0FBRFA7QUFQSCxVQURIO0FBaUJGO0FBQ0g7QUExRG9DOztBQTZEeEMsZUFBZWpCLFNBQWYiLCJmaWxlIjoiTW92aWVMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1vdmllIGZyb20gJy4vTW92aWUuanMnXG5cbmNsYXNzIE1vdmllTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgc3VwZXIocHJvcHMpIFxuXG4gICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgdG9XYXRjaFRhYkNsaWNrZWQ6IHRydWUsXG4gICAgICAgICB3YXRjaGVkVGFiQ2xpY2tlZDogZmFsc2VcbiAgICAgfVxuICAgfVxuXG4gICBoYW5kbGVUYWJDbGlja2VkKCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSAoe1xuICAgICAgICAgdG9XYXRjaFRhYkNsaWNrZWQ6ICEodGhpcy5zdGF0ZS50b1dhdGNoVGFiQ2xpY2tlZCksXG4gICAgICAgICB3YXRjaGVkVGFiQ2xpY2tlZDogISh0aGlzLnN0YXRlLndhdGNoZWRUYWJDbGlja2VkKVxuICAgICAgfSlcbiAgIH1cblxuICAgcmVuZGVyKCkge1xuXG4gICAgICBpZiAodGhpcy5zdGF0ZS50b1dhdGNoVGFiQ2xpY2tlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2IG5hdi10YWJzXCI+XG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2IGZsZXgtcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2BuYXYtbGluayBgfSBvbkNsaWNrPXsoKT0+IHRoaXMuaGFuZGxlVGFiQ2xpY2tlZCgpfSBocmVmPVwiI1wiPlRvIFdhdGNoPC9hPlxuICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtgbmF2LWxpbmsgYWN0aXZlYH0gb25DbGljaz17KCk9PiB0aGlzLmhhbmRsZVRhYkNsaWNrZWQoKX0gaHJlZj1cIiNcIj5XYXRjaGVkPC9hPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1ncm91cCBmbGV4LWNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgeyh0aGlzLnByb3BzLm1vdmllcy5maWx0ZXIobW92aWUgPT4gbW92aWUud2F0Y2hlZCA9PT0gZmFsc2UpKS5tYXAobW92aWUgPT4gXG4gICAgICAgICAgICAgICAgICAgICA8TW92aWUgbW92aWU9e21vdmllfSBcbiAgICAgICAgICAgICAgICAgICAgIGtleT17bW92aWUudG9XYXRjaFRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlV2F0Y2hlZEJhZGdlPXt0aGlzLnByb3BzLnRvZ2dsZVdhdGNoZWRCYWRnZX1cbiAgICAgICAgICAgICAgICAgICAgIC8+KX1cbiAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgIClcblxuICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLndhdGNoZWRUYWJDbGlja2VkID09PSB0cnVlKSAge1xuICAgICAgICAgXG4gICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXYgbmF2LXRhYnNcIj5cbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYgZmxleC1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17YG5hdi1saW5rIGFjdGl2ZWB9IG9uQ2xpY2s9eygpPT4gdGhpcy5oYW5kbGVUYWJDbGlja2VkKCl9IGhyZWY9XCIjXCI+VG8gV2F0Y2g8L2E+XG4gICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2BuYXYtbGluayBgfSBvbkNsaWNrPXsoKT0+IHRoaXMuaGFuZGxlVGFiQ2xpY2tlZCgpfSBocmVmPVwiI1wiPldhdGNoZWQ8L2E+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICB7KHRoaXMucHJvcHMubW92aWVzLmZpbHRlcihtb3ZpZSA9PiBtb3ZpZS53YXRjaGVkID09PSB0cnVlKSkubWFwKG1vdmllID0+IFxuICAgICAgICAgICAgICAgICAgICAgPE1vdmllIG1vdmllPXttb3ZpZX0gXG4gICAgICAgICAgICAgICAgICAgICBrZXk9e21vdmllLnRvV2F0Y2hUaXRsZX1cbiAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZVdhdGNoZWRCYWRnZT17dGhpcy5wcm9wcy50b2dnbGVXYXRjaGVkQmFkZ2V9XG4gICAgICAgICAgICAgICAgICAgICAvPil9XG4gICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICApXG4gICAgICB9IFxuICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNb3ZpZUxpc3Q7Il19