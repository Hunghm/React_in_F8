import clsx from 'clsx'
import React from 'react'

import styles from './Button.module.css'

function Button({primary}) {
    
    const classes = clsx(styles.btn, {
        [styles.primary]: primary,
        'd-flex': false
    })

    return (

        <button className={classes}>
            Click me!
        </button>

    )
}

export default Button