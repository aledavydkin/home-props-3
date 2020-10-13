import React from 'react';
import Message from './Message';
import Response from "./Response";
import Typing from "./Typing";
import PropTypes from "prop-types";

function MessageHistory( props ) {
    const { list } = props

    const message = list.map(item => {
        if(item.type === 'response') {
            return <Response message={item} from={item.from} key={item.id}>{item.id}</Response>;
        }
        if(item.type === 'message') {
            return <Message message={item} from={item.from} key={item.id}>{item.id}</Message>;
        }
        if(item.type === 'typing') {
            return <Typing message={item} from={item.from} key={item.id}>{item.id}</Typing>;
        }
    });

    return (
        <ul className={"container"}>
            {message}
        </ul>
    );
}

MessageHistory.propTypes = {
    list: PropTypes.arrayOf(PropTypes.shape({
        type: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        from: PropTypes.object.isRequired,
        text: PropTypes.string,
    }))
}

MessageHistory.defaultProps = {
    list: [],
};


export default MessageHistory;

