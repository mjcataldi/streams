import React from "react";

class GoogleAuth extends React.Component {
  state = {
    isSignedIn: null
  };

  componentDidMount() {
    window.gapi.load("client:auth2", () => {
<<<<<<< HEAD
      window.gapi.client.init({
        clientId: "hidden",
        scope: "email"
      });
=======
      window.gapi.client
        .init({
          clientId:
            "557178508348-gs7apm28a7omu57vgdjrr25k1h14qsfu.apps.googleusercontent.com",
          scope: "email"
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
>>>>>>> 36f10667fe9c2aa6cb96da0f78d2bfb9260c9679
    });
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  renderOffButton() {
    if (this.state.isSignedIn == null) {
      return <div>Don't know if we are signed in</div>;
    } else if (this.state.isSignedIn) {
      return <div>Signed In</div>;
    } else {
      return <div>Not Signed In</div>;
    }
  }

  render() {
    return this.renderOffButton();
  }
}

export default GoogleAuth;
