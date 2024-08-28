import React from 'react';

const FirstProps = (p) => {
    const {k,c} = p
    return (
        <div style={{
            color : c
        }}>
            hi, my name is {k}
        </div>
    );
};

export default FirstProps;