import React from 'react';
import './Notifications.css';

const Notifications = () => {
  return (
    <div className='Notifications'>

      <button style={{
        right: 20,
        border: "none",
        background: "transparent",
        position: "absolute",
      }}
      aria-label="close"
      onClick={() => console.log('Close button has been clicked')}
      >
        <img src={closeiconn}  alt="" />
      </button>
      <p>Here is the list of notifications</p>

      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li data-priority="urgent" dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
      </ul>
    </div>
  );
};

export default Notifications;