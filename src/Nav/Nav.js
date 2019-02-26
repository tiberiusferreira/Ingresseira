import React, {Component, Fragment} from 'react';
import {HomeButton, TicketButton, EditButton} from "./NavButtons"
import "./Nav.css"
import {NavLink } from "react-router-dom";


export class Nav extends Component {

    render() {
        let isOrganizer = true;
        return (
            <Fragment>
                <header>
                    <div className={"main-nav"}>
                        <NavLink exact to={'/'} className={"navlink"} activeClassName="navlink navlink-selected">
                            <HomeButton className={"main-nav-items"} color="lightgrey"/>
                        </NavLink>
                        <NavLink to={'/BoughtTickets'} className={"navlink"} activeClassName="navlink navlink-selected">
                            <TicketButton className={"main-nav-items"} color="lightgrey"/>
                        </NavLink>
                        {isOrganizer ? (
                        <NavLink exact to={'/ManageEvents'} className={"navlink"} activeClassName="navlink navlink-selected">
                            <EditButton className={"main-nav-items"} color="lightgrey"/>
                        </NavLink>) : (null)
                        }
                        {/*<NavLink exact to={'/Settings'} className={"navlink"} activeClassName="navlink navlink-selected">*/}
                            {/*<SettingsButton className={"main-nav-items"} color="lightgrey"/>*/}
                        {/*</NavLink>*/}
                    </div>
                </header>
            </Fragment>
        );
    }

}











