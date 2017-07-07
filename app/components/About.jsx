import React from 'react';

export default class About extends React.Component {
  render() {
    return (
      <div>
        <h1 className="page-title text-center">About</h1>
        <div className="row align-center">
          <div className="column small-12 medium-8">
            <h2 className="text-center">Description</h2>
            <p>
              This is a weather app that I built in July 2017 using React.
              This app shows the local weather when the home page loads. The user can then search for a different location. Users can also add locations from the home page to their list of saved locations. They can visit the saved locations page to see current weather conditions at all the locations they have saved.
              The app uses the IP-API to get the user's location and the Open Weather Map API to get the weather. I chose to use the IP-API instead of HTML5 Geolocation because I wanted people to be able to view the app over HTTP instead of HTTPS, but I may make an HTTPS version in the future.
            </p>

            <h2 className="text-center">Process</h2>
            <p>
              In the process of building this app, I learned how to use Webpack and Node.js during the development process.
              One challenge I faced in building this app was figuring out how to effectively manage the app's state. Right now, there are three different components in this app that hold state. Eventually I would like to refactor this app so that the state is consolidated in one place.
              One thing I understand a lot better after completing this project is how to use React's lifecycle methods. For example, the home page uses componentDidUpdate() to test whether or not the user's location has been retrieved yet. If it has, the method that fetches the weather for that location is called.
            </p>

            <h2 className="text-center">Thanks for checking out my app!</h2>
          </div>
        </div>
      </div>
    );
  }
}
