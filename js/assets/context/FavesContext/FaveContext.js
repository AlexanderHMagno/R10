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
    let a = storeData(sessionId);
    a.then(v => {
      console.log(`all was good! ${v}`);
    }).catch(e => {
      console.log(`error: ${e}`);
    });
    this.getFavedSessionIds();
    console.log(this.state.faveIds);
  }
  removeFaveSession(sessionId) {
    removeValue(sessionId);
    this.getFavedSessionIds();
  }
  render() {
    return (
      <FavesContext.Provider
        value={{
          remove: this.removeFaveSession.bind(this),
          add: this.addFaveSession.bind(this),
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
