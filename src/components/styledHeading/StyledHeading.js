import React from 'react'
import './style.scss'

export const StyledHeading = (props) => {
    return (
        <div>
            <span id='styled-heading'>{props.title}</span>
        </div>
    )
}
