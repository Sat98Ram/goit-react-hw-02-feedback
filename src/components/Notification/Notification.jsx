import React, { Component } from 'react';
import css from './Notification.module.css';

export default class Notification extends Component {
  render() {
    return (
      <div>
        <p className={css.message}>{this.props.message}</p>
      </div>
    );
  }
}
