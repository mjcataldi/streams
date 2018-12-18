import React from "react";

class GoogleAuth extends React.Component {
  componentdidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client.init({
        clientId: "hidden",
        scope: "email"
      });
    });
  }

  render() {
    return <div>Google Auth</div>;
  }
}

export default GoogleAuth;
