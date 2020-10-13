import React from 'react';
import PropTypes from 'prop-types';
import Star from "./Star";

function Stars( props ) {
    const { count } = props;
    const stars = [];

    const countStar = (count) => {
        for ( let i = 0; i < count; i++) {
            stars[i] = <Star key={i} />;
        }
        return stars;
    }

    if (isNaN(count) || count > 5 || count < 1) {
        return null;
    }

    return (
        <div className={"container"}>
            {countStar(count)}
        </div>
        );
    }

Stars.propTypes = {
    count: PropTypes.number.isRequired,
}

export default Stars;

