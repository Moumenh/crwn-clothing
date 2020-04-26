import React from 'react'

import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn,inverted, ...otherProps}) => (
    <button className={`${isGoogleSignIn ? 'google-sign' : ''}
    ${inverted ? 'inverted' : ''}
    custom-button`}
     {...otherProps}>
        {children}
    </button>
)

export default CustomButton;