import React from 'react'

type buttonPropsType = {
    name: string
    callBack: () => void
}

const Button = (props: buttonPropsType) => {
    const { name, callBack } = props;
    const onClickHandler = () => {
        callBack();
    }
    return (
        <button onClick={onClickHandler}>{name}</button>
    )
}

export default Button