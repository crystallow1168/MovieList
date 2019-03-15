
class AddMovie extends React.Component {
    constructor(props) {
        super(props) 
        
        this.state = {
            myList: ''
        }
    }

    handleChange(e) {
        this.setState({
            myList: e.target.value.trim().toLowerCase()
        })
    }

    render () {
        return (
            <div className="add-bar">
            <input type="text" placeholder="Add Movie..." value={this.state.myList} onChange={ (e) => this.handleChange(e) } ></input>
            <button onClick={ () => this.props.submit(this.state.myList)}>Submit</button>
            </div>
        )
        
    }
}

export default AddMovie