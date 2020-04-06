
import React from 'react';
import './Contact.css';
import propTypes from 'prop-types';

class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      online: false,
    };
  }

render(){
  return (
    <div className="Contact">
      <img className="avatar" src={this.props.avatar} />
      <div className="status name">
        <p>{this.props.name}</p>
        <p className="status text">{this.props.online ? <span className="status-online"></span> : <span className="status-offline"></span>} {this.props.online ? "Online" : "Offline"}</p>
      </div>
    </div>
  );
}
}
Contact.propTypes = {
  name: propTypes.string.isRequired,
  avatar: propTypes.string.isRequired,
  online: propTypes.bool.isRequired

}
export default Contact;
