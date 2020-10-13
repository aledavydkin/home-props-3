import React from 'react';
import PropTypes from "prop-types";

function Response( props ) {
    const { message, from } = props
    return (
        <li>
            <div className="message-data">
                <span className="message-data-name"><i className="fa fa-circle online"></i>{from.name}</span>
                <span className="message-data-time"> {message.time}</span>
            </div>
            <div className="message my-message">
                {message.text}
            </div>
        </li>
    );
}

Response.propTypes = {
    message: PropTypes.shape({
        time: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    }),
    from: PropTypes.shape({
        name: PropTypes.string.isRequired,
    }),
}

export default Response;

