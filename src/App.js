import React, { Component } from "react";
import "./App.css";
import authorInfo from "./authorInfo.json";
import BooksList from "./components/books/BooksList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authorInfo
    };
  }
  // componentWillMount() {
  //   //for debugging
  //   console.log(this.state.authorInfo, "the authorInfo");
  // }
  render() {
    const { data } = this.state.authorInfo;
    return (
      <div className="App">
        <BooksList authorInfo={data} />
      </div>
    );
  }
}

export default App;
