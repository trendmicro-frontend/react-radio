import React from 'react';
import styled from 'styled-components';

const clickEvent = () => {
    console.log('It won\'t check radio button.');
};

const Tag = ({ className, children }) => (
    <div
        className={className}
        role="presentation"
        onClick={clickEvent}
    >
        {children}
    </div>
);

const CustomizedTag = styled(Tag)`
    border-radius: 3px;
    background-color: #666;
    color: #FFF;
    padding: 12px;
`;

export default CustomizedTag;
