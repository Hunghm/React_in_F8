import clsx from 'clsx'
import React from 'react'

import styles from './Button.module.scss'

function Button({primary, disable}) {
    
    const classes = clsx(styles.btn, {
        [styles.primary]: primary,
        [styles.disable]: disable,
        'd-flex': false,
    })

    return (

        <button className={classes}>
            Click me!
        </button>

    )
}

export default Button