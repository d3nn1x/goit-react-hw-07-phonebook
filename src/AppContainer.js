import React, { Component } from "react";
import { connect } from "react-redux";
import { getContacts } from "./redux/phonebook/phonebookOperations";

import { getMessage, getLoading } from "./redux/phonebook/phonebookSelectors.js";
import App from "./App";

class AppContainer extends Component {
  static defaultProps = {
    loading: false,
  };

  componentDidMount() {
    this.props.getContacts();
  }

  render() {
    return <App {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isLoading: getLoading(state),
  message: getMessage(state),
});

const mapDispatchToProps = {
  getContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
