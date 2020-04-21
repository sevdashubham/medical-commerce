import React, { Component } from "react";
import styled from "styled-components";

const ButtonStyle = styled.div`
  /* This renders the buttons above... Edit me! */
  display: inline-block;
 -webkit-appearance: none;
    box-shadow: none;
    cursor: pointer;
    display: inline-block;
    font-family: SofiaProWeb, Helvetica, Arial, sans-serif;
    font-size: .875rem;
    font-weight: 600;
    height: 3.5rem;
    line-height: 1;
    min-width: 13.25rem;
    transition-duration: 100ms;
    transition-property: background, border, box-shadow, color;
    transition-timing-function: ease;
    pointer-events: auto;
    color: rgb(255, 255, 255);
    background: rgb(0, 0, 0);
    margin: 0px;
    outline: none;
    padding: calc(1rem + 2px) 1rem calc(1rem - 2px);
    border-width: 0.125rem;
    border-style: solid;
    border-color: rgb(0, 0, 0);
    border-image: initial;
    text-align: center;


&:hover {
    background: transparent;
    color: rgb(0, 0, 0);
  }
  /* The GitHub button is a primary button
   * edit this to target it specifically! */
  ${props => props.primary && `
    background: white;
    color: palevioletred;
  `}
`

class Button extends Component {

  render() {
    const {href, target, rel, title, primary} = this.props;
    return (
      <ButtonStyle {... {href, target, rel, primary}}>
        {title}
      </ButtonStyle>
    )
  }
}
export default Button
