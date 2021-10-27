import React from 'react'

const ScrollHidden = (status) => {

    return (
        document.body.style.overflowY = status
    )
}

export default ScrollHidden
