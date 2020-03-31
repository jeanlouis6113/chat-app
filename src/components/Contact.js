
import React from 'react';
import './Contact.css';
import propTypes from 'prop-types';

const Contact = ({ name, avatar, online }) => {
  return (
    <div className="Contact">
      <img className="avatar" src={avatar} />
      <div className="status name">
        <p>{name}</p>
        <p className="status text">{online ? <span className="status-online"></span> : <span className="status-offline"></span>} {online ? "Online" : "Offline"}</p>
      </div>
    </div>
  );
}

Contact.propTypes = {
  name: propTypes.string.isRequired,
  avatar: propTypes.string.isRequired,
  online: propTypes.bool.isRequired

}
export default Contact;
