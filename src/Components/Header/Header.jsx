import React, { Component } from 'react';
import './Header.css';
import TabButtons from '../TabButtons/TabButtons';

export default class Header extends Component {
  // constructort(props) {
  //   super(props);
  //   this.state = {

  //   }
  // }
  render() {
    return (
      <>
        <div className="header">
          <h2 className="title-h2">This header is working</h2>
          <TabButtons />
        </div>
      </>
    );
  }
}
