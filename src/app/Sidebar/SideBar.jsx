import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './SideBar.css';

const propTypes = {
  addAnimeInfoHandler: PropTypes.func.isRequired,
};

const cx  = classNames.bind(styles);
const rating = ['G', 'PG', 'R', 'R18'];

class Sidebar extends React.Component {
  state = {
    checkedRating: ['G', 'R18'],
  };

  onClick = (event) => {
    this.props.addAnimeInfoHandler(event, this.state);
  };

  handleRatingChange = (event) => {
    const { target } = event;
    const isChecked = target.checked;
    const { name } = target;

    this.setState((prevState) => {
      const arr = new Set(prevState.checkedRating);
      isChecked ? arr.add(name) : arr.delete(name);

      return { checkedRating: Array.from(arr) };
    });
  }

  render() {
    return (
      <aside className={cx('sidebar')}>
        <button className={cx('getAnimeButton')} type="button" onClick={this.onClick}>
        find
        </button>
        <fieldset className={cx('ratingFilter')} name="ageRating">
          <legend className={cx('filterName')}>
            Age rating
          </legend>
          {rating.map(rating => (
            <div className={cx('checkbox')} key={rating}>
              <label htmlFor={rating}>
                <input
                  id={rating}
                  name={rating}
                  type="checkbox"
                  checked={this.state.checkedRating.indexOf(rating) > -1}
                  onChange={this.handleRatingChange}
                />
                {rating}
              </label>
            </div>
          ))}
        </fieldset>
      </aside>
    );
  }
}

Sidebar.propTypes = propTypes;

export default Sidebar;
