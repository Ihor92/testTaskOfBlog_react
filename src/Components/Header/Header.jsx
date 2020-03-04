import React, { Component } from 'react';
import './Header.css';
import TabButtons from '../TabButtons/TabButtons';

export default class Header extends Component {
  render() {
    return (
      <>
        <div className="header">
          <div className="header-wrap">
            <h2 className="title-h2">Logo</h2>
            <TabButtons />
          </div>
        </div>
      </>
    );
  }
}
