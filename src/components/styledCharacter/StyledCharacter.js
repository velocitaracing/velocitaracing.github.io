import React from 'react'
import './style.scss'

export const StyledCharacter = (props) => {
    return (
        <div>
              <span id='styled-character' className='styled-character-position'>{props.title}</span>
        </div>
    )
}
