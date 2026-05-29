import React from 'react';
import {Children} from "../Types/Children.ts";

const Message = ({children}:Children) => {
    return (
        <h2>
            {children}
        </h2>
    );
};

export default Message;