import React from 'react';
import PropTypes from "prop-types";

function Typing( props ) {
    const { message, from } = props
    return (
        <li>
            <div className="message-data">
                <span className="message-data-name"><i className="fa fa-circle online"/> {from.name}</span>
                <span className="message-data-time">{message.time}</span>
            </div>
            <i className="fa fa-circle online"/>
            <i className="fa fa-circle online" style={{color: '#AED2A6'}}/>
            <i className="fa fa-circle online" style={{color: '#DAE9DA'}}/>
        </li>
    );
}

Typing.propTypes = {
    message: PropTypes.shape({
        time: PropTypes.string.isRequired,
    }),
    from: PropTypes.shape({
        name: PropTypes.string.isRequired,
    }),
}

export default Typing;

