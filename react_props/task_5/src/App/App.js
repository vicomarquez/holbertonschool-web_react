import React from 'react';
import './App.css';

import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import propTypes from 'prop-types';
import CourseList from '../CourseList/CourseList';

function App({ isLoggedIn }) {
  const listCourses = [
    {id: 1, name: 'ES6', credit: '60'},
    {id: 2, name: 'Webpack', credit: '20'},
    {id: 3, name: 'React', credit: '40'}
    ];

  const listNotifications = [
    {id: 1, type: 'default', value: 'New course available'},
    {id: 2, type: 'urgent', value: 'New resume available'},
    {id: 3, type: 'urgent', html: { __html: getLatestNotification() }}
  ];
  
  return (
    <>
      <Notifications listNotifications={listNotifications}/>
      <div className="App-header">
        <Header />
      </div>
      <div className='App-body'>
        {isLoggedIn ? <CourseList listCourses={listCourses} /> : <Login />}
      </div>
      <div className='App-footer'>
        <Footer />
        </div>
    </>
  );
};


App.propTypes = {
	isLoggedIn: propTypes.bool
};

App.defaultProps = {
	isLoggedIn: true
};


export default App;