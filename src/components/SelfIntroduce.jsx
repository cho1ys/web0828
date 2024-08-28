import React from 'react';

const SelfIntroduce = (p) => {
    const {name, age, address, cn, ca,cad} = p
    
    return (
        <div>
            안녕하세요. 제 이름은 <span style={{color : cn}}>{name}</span>입니다.<br/>
            저는 <span style={{color :  ca}}>{age}</span>살이고, <span style={{color  : cad}}>{address}</span>에 살고있습니다.
        </div>
    );
};
SelfIntroduce.defaultProps = {
    name : '최윤성',
    age : 26,
    address :'안양',
    cn : "blue",
    ca : "red",
    cad : "orange",
}
export default SelfIntroduce;