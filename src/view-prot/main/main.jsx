import React, { Component } from "react";

import "./main.css";
import DocList from "../doc-list/doc-list"
import DocView from "../doc-view/doc-view";
import DocMeta from "../doc-meta/doc-meta";

export default class Main extends Component {
  constructor() {
    super();

    this.state = {      
    };
  }


  render() {
    return (
      <div className="main-container">
        <DocList />
        <DocView />
        <DocMeta />
      </div>
    );
  }
}
