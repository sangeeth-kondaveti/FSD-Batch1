import React, { Component } from "react";

export default class LifeCycleB extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Jack",
    };
    console.log("LifeCycleB constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleB getDerivedStateFromProps");
    return state.name;
  }

  render() {
    console.log("LifeCycleB render");
    return (
      <div>
        <h1>LifeCycleB Component</h1>
      </div>
    );
  }

  componentDidMount() {
    console.log("LifeCycleB componentDidMount");
  }
}
