import CardList from "./components/cardList";
import SearchBar from "./components/searchBar";
import React from "react";

class App extends React.Component {
  state = {
    profiles: [],
  };
  addNewProfile = (profileData) => {
    this.setState((prevState) => ({
      profiles: [...prevState.profiles, profileData],
    }));
  };
  render() {
    return (
      <div>
        <div className="header">GitHub Profile Card</div>
        <SearchBar onSubmit={this.addNewProfile} />
        <CardList profileData={this.state.profiles} />
      </div>
    );
  }
}

export default App;
