import React, { Component } from 'react';

const NavBar = props => {
    console.log('navbar rendered bbbbbbb!');
    
    return ( 
        <nav className="navbar navbar-light bg-light">
            <a href="#" className="navbar-brand">
                Navvie{" "}
                <span className="badge bage-pill badge-secondary">
                    {props.totalCounters}
                </span>
            </a>
        </nav> 
    );
};
 
export default NavBar;