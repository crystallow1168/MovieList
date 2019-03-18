
class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchText: ''
        };
    }

    handleChange(e) {
        this.setState({
            searchText: e.target.value.trim().toLowerCase()
        });
    }

    render() {
        return React.createElement(
            "div",
            { className: "search-bar" },
            React.createElement("input", { type: "text", placeholder: "Search...", value: this.state.searchText, onChange: e => this.handleChange(e) }),
            React.createElement(
                "button",
                { className: "btn btn-success", onClick: () => this.props.submit(this.state.searchText) },
                "Search"
            )
        );
    }
}

export default Search;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1NlYXJjaC5qc3giXSwibmFtZXMiOlsiU2VhcmNoIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJzZWFyY2hUZXh0IiwiaGFuZGxlQ2hhbmdlIiwiZSIsInNldFN0YXRlIiwidGFyZ2V0IiwidmFsdWUiLCJ0cmltIiwidG9Mb3dlckNhc2UiLCJyZW5kZXIiLCJzdWJtaXQiXSwibWFwcGluZ3MiOiI7QUFDQSxNQUFNQSxNQUFOLFNBQXFCQyxNQUFNQyxTQUEzQixDQUFxQztBQUNqQ0MsZ0JBQVlDLEtBQVosRUFBbUI7QUFDZixjQUFNQSxLQUFOOztBQUVBLGFBQUtDLEtBQUwsR0FBYTtBQUNUQyx3QkFBWTtBQURILFNBQWI7QUFHSDs7QUFFREMsaUJBQWFDLENBQWIsRUFBZ0I7QUFDWixhQUFLQyxRQUFMLENBQWM7QUFDVkgsd0JBQVlFLEVBQUVFLE1BQUYsQ0FBU0MsS0FBVCxDQUFlQyxJQUFmLEdBQXNCQyxXQUF0QjtBQURGLFNBQWQ7QUFHSDs7QUFFREMsYUFBVTtBQUNOLGVBQ0k7QUFBQTtBQUFBLGNBQUssV0FBVSxZQUFmO0FBQ0EsMkNBQU8sTUFBSyxNQUFaLEVBQW1CLGFBQVksV0FBL0IsRUFBMkMsT0FBTyxLQUFLVCxLQUFMLENBQVdDLFVBQTdELEVBQXlFLFVBQVlFLENBQUQsSUFBTyxLQUFLRCxZQUFMLENBQWtCQyxDQUFsQixDQUEzRixHQURBO0FBRUE7QUFBQTtBQUFBLGtCQUFRLFdBQVUsaUJBQWxCLEVBQW9DLFNBQVUsTUFBTSxLQUFLSixLQUFMLENBQVdXLE1BQVgsQ0FBa0IsS0FBS1YsS0FBTCxDQUFXQyxVQUE3QixDQUFwRDtBQUFBO0FBQUE7QUFGQSxTQURKO0FBT0g7QUF2QmdDOztBQTRCckMsZUFBZU4sTUFBZiIsImZpbGUiOiJTZWFyY2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmNsYXNzIFNlYXJjaCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpIFxuICAgICAgICBcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHNlYXJjaFRleHQ6ICcnXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVDaGFuZ2UoZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHNlYXJjaFRleHQ6IGUudGFyZ2V0LnZhbHVlLnRyaW0oKS50b0xvd2VyQ2FzZSgpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmVuZGVyICgpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWJhclwiPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJTZWFyY2guLi5cIiB2YWx1ZT17dGhpcy5zdGF0ZS5zZWFyY2hUZXh0fSBvbkNoYW5nZT17IChlKSA9PiB0aGlzLmhhbmRsZUNoYW5nZShlKSB9ID48L2lucHV0PlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3NcIiBvbkNsaWNrPXsgKCkgPT4gdGhpcy5wcm9wcy5zdWJtaXQodGhpcy5zdGF0ZS5zZWFyY2hUZXh0KX0+U2VhcmNoPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgICAgICBcbiAgICB9XG59XG5cblxuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2giXX0=