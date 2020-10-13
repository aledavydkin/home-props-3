import React from 'react';
import PropTypes from "prop-types";
import Typing from "./Typing";

function Message( props ) {
    const { message, from } = props
    return (
        <li className="clearfix">
            <div className="message-data align-right">
                <span className="message-data-time">{message.time}</span> &nbsp; &nbsp;
                <span className="message-data-name">{from.name}</span>
                <i className="fa fa-circle me"></i>
            </div>
            <div className="message other-message float-right">
                {message.text}
            </div>
        </li>
    );
}

Typing.propTypes = {
    message: PropTypes.shape({
        time: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    }),
    from: PropTypes.shape({
        name: PropTypes.string.isRequired,
    }),
}

export default Message;

