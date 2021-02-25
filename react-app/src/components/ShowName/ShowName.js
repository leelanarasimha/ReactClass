const { Component } = require('react');

class ShowName extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }
    render() {
        return <div>{this.props.name}</div>;
    }
}

export default ShowName;
