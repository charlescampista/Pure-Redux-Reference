import React, { Component } from "react";
import { Provider } from "react-redux"; //It uses context Api
import Sidebar from "./components/Sidebar";
import Video from "./components/Video";
import store from "./store";
export default class App extends Component {
  render() {
    return (
      <div>
        {/* Our Store "global state" is passed for all the components in the application by Provider */}
        <Provider store={store}>
          <Video />
          <Sidebar />
        </Provider>
      </div>
    );
  }
}
