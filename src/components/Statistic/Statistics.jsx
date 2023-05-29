import { Component } from 'react';
import css from './Statistic.module.css';

export default class Statistic extends Component {
  render() {
    return (
      <>
        <ul>
          <li className={css.statisticItem}>Good: {this.props.good}</li>
          <li className={css.statisticItem}>Neutral: {this.props.neutral}</li>
          <li className={css.statisticItem}>Bad: {this.props.bad}</li>
          <li className={css.statisticItem}>Total: {this.props.total}</li>
          <li className={css.statisticItem}>
            Positive feedback: {this.props.percentage}%
          </li>
        </ul>
      </>
    );
  }
}
