import React from 'react';
import CustomLink from "../../ui/CustomLink/CustomLink";
import classes from './Header.module.css'

const Header = () => {
    return (
        <div className={classes.container}>
            <p className={classes.logo}>JIRA</p>
            <nav className={classes.nav}>
                <CustomLink to="/">Ticket list</CustomLink>
                <CustomLink to="board">Board</CustomLink>
            </nav>
        </div>
    );
};

export default Header;