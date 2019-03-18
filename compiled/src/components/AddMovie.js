class AddMovie extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            myList: ''
        };
    }

    handleChange(e) {
        this.setState({
            myList: e.target.value.trim().toLowerCase()
        });
    }

    render() {
        return React.createElement(
            "div",
            { className: "add-bar" },
            React.createElement("input", { type: "text", placeholder: "Add Movie...", value: this.state.myList, onChange: e => this.handleChange(e) }),
            React.createElement(
                "button",
                { className: "btn btn-primary", onClick: () => this.props.submit(this.state.myList) },
                "Submit"
            )
        );
    }
}

export default AddMovie;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FkZE1vdmllLmpzeCJdLCJuYW1lcyI6WyJBZGRNb3ZpZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwibXlMaXN0IiwiaGFuZGxlQ2hhbmdlIiwiZSIsInNldFN0YXRlIiwidGFyZ2V0IiwidmFsdWUiLCJ0cmltIiwidG9Mb3dlckNhc2UiLCJyZW5kZXIiLCJzdWJtaXQiXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLFFBQU4sU0FBdUJDLE1BQU1DLFNBQTdCLENBQXVDO0FBQ25DQyxnQkFBWUMsS0FBWixFQUFtQjtBQUNmLGNBQU1BLEtBQU47O0FBRUEsYUFBS0MsS0FBTCxHQUFhO0FBQ1RDLG9CQUFRO0FBREMsU0FBYjtBQUdIOztBQUVEQyxpQkFBYUMsQ0FBYixFQUFnQjtBQUNaLGFBQUtDLFFBQUwsQ0FBYztBQUNWSCxvQkFBUUUsRUFBRUUsTUFBRixDQUFTQyxLQUFULENBQWVDLElBQWYsR0FBc0JDLFdBQXRCO0FBREUsU0FBZDtBQUdIOztBQUVEQyxhQUFVO0FBQ04sZUFDSTtBQUFBO0FBQUEsY0FBSyxXQUFVLFNBQWY7QUFDQSwyQ0FBTyxNQUFLLE1BQVosRUFBbUIsYUFBWSxjQUEvQixFQUE4QyxPQUFPLEtBQUtULEtBQUwsQ0FBV0MsTUFBaEUsRUFBd0UsVUFBWUUsQ0FBRCxJQUFPLEtBQUtELFlBQUwsQ0FBa0JDLENBQWxCLENBQTFGLEdBREE7QUFFQTtBQUFBO0FBQUEsa0JBQVEsV0FBVSxpQkFBbEIsRUFBb0MsU0FBVSxNQUFNLEtBQUtKLEtBQUwsQ0FBV1csTUFBWCxDQUFrQixLQUFLVixLQUFMLENBQVdDLE1BQTdCLENBQXBEO0FBQUE7QUFBQTtBQUZBLFNBREo7QUFNSDtBQXRCa0M7O0FBeUJ2QyxlQUFlTixRQUFmIiwiZmlsZSI6IkFkZE1vdmllLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQWRkTW92aWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKSBcbiAgICAgICAgXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBteUxpc3Q6ICcnXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVDaGFuZ2UoZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG15TGlzdDogZS50YXJnZXQudmFsdWUudHJpbSgpLnRvTG93ZXJDYXNlKClcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZW5kZXIgKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZGQtYmFyXCI+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkFkZCBNb3ZpZS4uLlwiIHZhbHVlPXt0aGlzLnN0YXRlLm15TGlzdH0gb25DaGFuZ2U9eyAoZSkgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoZSkgfSA+PC9pbnB1dD5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgb25DbGljaz17ICgpID0+IHRoaXMucHJvcHMuc3VibWl0KHRoaXMuc3RhdGUubXlMaXN0KX0+U3VibWl0PC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQWRkTW92aWUiXX0=