import React, { Component } from "react";
import Button from "../components/Button";

export default class Landing extends Component {
  render() {
    return(
      <div>
        <Button
          href="https://github.com/styled-components/styled-components"
          target="_blank"
          rel="noopener"
          title="GitHub"/>
      </div>
      )
  }
}
