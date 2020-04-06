import React from "react";
import "./Contact.css";
import propTypes from "prop-types";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      online: this.props.online
    };
  }

  render() {
    return (
      <div className="Contact"
            onClick={event => {
                const newOnline = !this.state.online;
                this.setState({ online: newOnline });
              }}
              >
        <img className="avatar" src={this.props.avatar} alt="avatar" />
        <div className="status name">
          <p>{this.props.name}</p>
          <p className="status text">
            <span
              className={this.state.online ? 'status-online' : 'status-offline'}
            >
            </span>
            {this.state.online ? "Online" : "Offline"}
          </p>
        </div>
      </div >
    );
  }
}

Contact.propTypes = {
  name: propTypes.string.isRequired,
  avatar: propTypes.string.isRequired,
  online: propTypes.bool.isRequired
};
export default Contact;