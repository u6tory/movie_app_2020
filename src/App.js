import React from "react";
// import PropTypes from "prop-types";

class App extends React.Component {
  state = {
    isLoading: true,
    book: true,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false, movie: [] });
      console.log(this.state.book);
      console.log(this.state.movie);
    }, 5000);
  }

  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading..." : "We are ready"}</div>;
  }
}
export default App;
