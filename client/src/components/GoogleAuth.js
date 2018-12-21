import React from "react";

class GoogleAuth extends React.Component {
  componentdidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client.init({
        clientId:
          "557178508348-gs7apm28a7omu57vgdjrr25k1h14qsfu.apps.googleusercontent.com",
        scope: "email"
      });
    });
  }

  render() {
    return <div>Google Auth</div>;
  }
}

export default GoogleAuth;
