import React, { Component } from "react";
import LifeCycleB from "./LifeCycleB";
export default class LifeCycleA extends Component {
  componentDidMount() {
    console.log("LifeCycleA componentDidMount");
  }

  constructor(props) {
    super(props);
    this.state = {
      name: "Jack",
    };
    console.log("LifeCycleA constructor");
  }

  static getDerivedStateFromProps() {
    console.log("LifeCycleA getDerivedStateFromProps");
    return null;
  }

  render() {
    console.log("LifeCycleA render");
    return (
      <div>
        <h1>LifeCycleA Component</h1>
        <h2>
          <LifeCycleB />
        </h2>
      </div>
    );
  }
}
