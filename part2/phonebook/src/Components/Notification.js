import React from 'react';
import '../index.css'

const Notification = ({ message, type }) => {
  if (message === null) {
    return null
  }
  return (
    <div className={`notification notification_${type}`}>
      {message}
    </div>
  )
};

export default Notification;
