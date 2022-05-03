import React from 'react';
import {Link, useMatch} from "react-router-dom";
import styles from './customLink.module.css'

const CustomLink = ({children, to, ...props}) => {
    const match = useMatch({
        path: to,
        end: to.length === 1
    })
    const classes = [styles.link]
    if (match) classes.push(styles.active)
    console.log(classes)
    return (
            <Link to={to} className={classes.join(' ')} {...props}>
                {children}
            </Link>
    );
};

export default CustomLink;