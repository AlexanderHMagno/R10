import React, { Component } from "react";
import {
  storeData,
  getAllKeys,
  getMultiple,
  removeValue
} from "../../../config/model";

const FavesContext = React.createContext();
class FavesProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      faveIds: [],
      hasInitialize: false
    };
  }
  async componentDidMount() {
    await this.getFavedSessionIds();
    this.setState({
      hasInitialize: true
    });
  }
  async getFavedSessionIds() {
    this.setState({ faveIds: await getAllKeys() });
  }
  addFaveSession(sessionId) {
    storeData(sessionId);
  }
  removeFaveSession(sessionId) {
    removeValue(sessionId);
  }
  render() {
    return (
      <FavesContext.Provider
        value={{
          remove: this.removeFaveSession,
          add: this.addFaveSession,
          state: this.state
        }}
      >
        {this.props.children}
      </FavesContext.Provider>
    );
  }
}
export { FavesProvider };
export default FavesContext;
