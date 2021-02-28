import React from 'react'

const Button = ({c,word,OnClick}) => {
    return (
        <div>
             <button style={{backgroundColor:c}} className='btn' onClick={OnClick}>{word}</button>
        </div>
       
    )
}

export default Button


Button.defaultProps={
    c : "steelblue",
    word : "Add"
}
