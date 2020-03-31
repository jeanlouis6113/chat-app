
import React from 'react';
import './Contact.css';
const Contact = ({ Name, Avatar, Online }) => {
  return (
    <div className="Contact">
      <img className="avatar" src={Avatar} />
      <div className="status name">
        <p>{Name}</p>
        <p className="status text">{Online ? <span className="status-online"></span> : <span className="status-offline"></span>} {Online ? "Online" : "Offline"}</p>
      </div>
    </div>
  );
}
export default Contact;