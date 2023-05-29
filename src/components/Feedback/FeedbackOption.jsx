import React, { Component } from 'react';
import css from './Feedback.module.css';

export default class FeedbackOption extends Component {
  render() {
    return (
      <div className={css.buttons}>
        {this.props.options.map(option => (
          <button
            key={option}
            name={option}
            className={css.button}
            onClick={this.props.onLeaveFeedback}
          >
            {option}
          </button>
        ))}
      </div>
    );
  }
}
