import React from 'react';
import "./Smurf.css"

class Smurf extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
    }
  }

  componentDidMount() {
    this.setState({ id: this.props.id })
  }

  deleteHelper = e => {
    e.preventDefault();
    this.props.deleteSmurf(this.state.id);
  }

  render() {
    return (
      <div className="Smurf">
        <h3>{this.props.name}</h3>
        <strong>{this.props.height} tall</strong>
        <p>{this.props.age} smurf years old</p>
        <form>
          <button type="submit" onClick={this.deleteHelper}><i className="fal fa-trash"></i></button>
        </form>
      </div>
    );
  }
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

