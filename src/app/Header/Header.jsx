import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './Header.css';

const cx = classNames.bind(styles);

function Header(props) {
    const { content } = props;
    return (
        <header className={cx('sidebar')}>
            <h1 className={cx('title')}>
                {content.title}
            </h1>
            <p className={cx('description')}>
                {content.description}
            </p>
        </header>
    );
}

/* check props types and existence */
Header.propTypes = {
    content: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
    }).isRequired,
};

export default Header;
