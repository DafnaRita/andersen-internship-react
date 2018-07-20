import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    addAnimeInfoHandler: PropTypes.func.isRequired,
};

class Sidebar extends React.Component {
    state = {
        checkedRating: ['G', 'R18'],
    };

    onClick = (event) => {
        this.props.addAnimeInfoHandler(event, this.state);
    };

    handleRatingChange(event) {
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
            <aside>
                <button type="button" onClick={this.onClick}>
                    find
                </button>
                <fieldset name="ageRating">
                    <legend>
                        Age rating
                    </legend>
                    {['G', 'PG', 'R', 'R18'].map(rating => (
                        <div key={rating}>
                            <label htmlFor={rating}>
                                <input
                                    id={rating}
                                    name={rating}
                                    type="checkbox"
                                    checked={this.state.checkedRating.indexOf(rating) > -1}
                                    onChange={this.handleRatingChange.bind(this)}
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
