import React from 'react';

const BooleanComponent = ({study}) => {
    const message = study ? '공부' : '놀기'
    return (
        <div>
            <h1>{message}</h1>
        </div>
    );
};
BooleanComponent.defaultProps = {
    study : true
}

export default BooleanComponent;