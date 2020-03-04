import React, { Component } from 'react';
import './Header.css';
import TabButtons from '../TabButtons/TabButtons';

export default class Header extends Component {
  render() {
    return (
      <>
        <div className="header">
          <h2 className="title-h2">Header</h2>
          <TabButtons />
        </div>
      </>
    );
  }
}
