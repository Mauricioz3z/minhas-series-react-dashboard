import React, { Component } from 'react'
import {Link} from 'react-router'
export default class Header extends Component {
    render() {
        return (
            <header className="header">
                <nav className="navbar navbar-expand-lg px-4 py-2 bg-white shadow"><a href="#" className="sidebar-toggler text-gray-500 mr-4 mr-lg-5 lead"><i className="fas fa-align-left"></i></a><a href="index.html" className="navbar-brand font-weight-bold text-uppercase text-base">Bubbly Dashboard</a>
                    <ul className="ml-auto d-flex align-items-center list-unstyled mb-0">
                        <li className="nav-item">
                            <form id="searchForm" className="ml-auto d-none d-lg-block">
                                <div className="form-group position-relative mb-0">
                                    <button type="submit" className="position-absolute bg-white border-0 p-0 button-top"><i className="o-search-magnify-1 text-gray text-lg"></i></button>
                                    <input type="search" placeholder="Search ..." className="form-control form-control-sm border-0 no-shadow pl-4" />
                                </div>
                            </form>
                        </li>
                        <li className="nav-item dropdown mr-3"><a id="notifications" href="http://example.com" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="nav-link dropdown-toggle text-gray-400 px-1"><i className="fa fa-bell"></i><span className="notification-icon"></span></a>
                            <div aria-labelledby="notifications" className="dropdown-menu"><a href="#" className="dropdown-item">
                                <div className="d-flex align-items-center">
                                    <div className="icon icon-sm bg-violet text-white"><i className="fab fa-twitter"></i></div>
                                    <div className="text ml-2">
                                        <p className="mb-0">You have 2 followers</p>
                                    </div>
                                </div></a><a href="#" className="dropdown-item">
                                    <div className="d-flex align-items-center">
                                        <div className="icon icon-sm bg-green text-white"><i className="fas fa-envelope"></i></div>
                                        <div className="text ml-2">
                                            <p className="mb-0">You have 6 new messages</p>
                                        </div>
                                    </div></a><a href="#" className="dropdown-item">
                                    <div className="d-flex align-items-center">
                                        <div className="icon icon-sm bg-blue text-white"><i className="fas fa-upload"></i></div>
                                        <div className="text ml-2">
                                            <p className="mb-0">Server rebooted</p>
                                        </div>
                                    </div></a><a href="#" className="dropdown-item">
                                    <div className="d-flex align-items-center">
                                        <div className="icon icon-sm bg-violet text-white"><i className="fab fa-twitter"></i></div>
                                        <div className="text ml-2">
                                            <p className="mb-0">You have 2 followers</p>
                                        </div>
                                    </div></a>
                                <div className="dropdown-divider"></div><a href="#" className="dropdown-item text-center"><small className="font-weight-bold headings-font-family text-uppercase">View all notifications</small></a>
                            </div>
                        </li>
                        <li className="nav-item dropdown ml-auto"><a id="userInfo" href="http://example.com" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="nav-link dropdown-toggle"><img src="img/avatar-6.jpg" alt="Jason Doe" className="img-fluid rounded-circle shadow header-size" /></a>
                            <div aria-labelledby="userInfo" className="dropdown-menu"><a href="#" className="dropdown-item"><strong className="d-block text-uppercase headings-font-family">Mark Stephen</strong><small>Web Developer</small></a>
                                <div className="dropdown-divider"></div><a href="#" className="dropdown-item">Settings</a><a href="#" className="dropdown-item">Activity log       </a>
                                <div className="dropdown-divider"></div><Link to="logout" className="dropdown-item">Sair</Link>
                            </div>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}