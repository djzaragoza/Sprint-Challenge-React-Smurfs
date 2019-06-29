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
      </div>
    )
  }
}



Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

