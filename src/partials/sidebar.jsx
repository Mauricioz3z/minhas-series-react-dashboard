import React, { Component } from 'react'
import {Link} from 'react-router'

export default class Sidebar extends Component {
    render() {
        return (
            <div id="sidebar" className="sidebar py-3">
                <div className="text-gray-400 text-uppercase px-3 px-lg-4 py-4 font-weight-bold small headings-font-family">MAIN</div>
                <ul className="sidebar-menu list-unstyled">
                    <li className="sidebar-list-item"><a href="index.html" className="sidebar-link text-muted"><i className="o-home-1 mr-3 text-gray"></i><span>Home</span></a></li>
                    <li className="sidebar-list-item"><Link to="series" className="sidebar-link text-muted"><i className="o-sales-up-1 mr-3 text-gray"></i><span>Séries</span></Link></li>
                    <li className="sidebar-list-item"><a href="tables.html" className="sidebar-link text-muted"><i className="o-table-content-1 mr-3 text-gray"></i><span>Tables</span></a></li>
                    <li className="sidebar-list-item"><a href="forms.html" className="sidebar-link text-muted"><i className="o-survey-1 mr-3 text-gray"></i><span>Forms</span></a></li>
                    <li className="sidebar-list-item"><a href="#" data-toggle="collapse" data-target="#pages" aria-expanded="false" aria-controls="pages" className="sidebar-link text-muted"><i className="o-wireframe-1 mr-3 text-gray"></i><span>Pages</span></a>
                        <div id="pages" className="collapse">
                            <ul className="sidebar-menu list-unstyled border-left border-primary border-thick">
                                <li className="sidebar-list-item"><a href="#" className="sidebar-link text-muted pl-lg-5">Page one</a></li>
                                <li className="sidebar-list-item"><a href="#" className="sidebar-link text-muted pl-lg-5">Page two</a></li>
                                <li className="sidebar-list-item"><a href="#" className="sidebar-link text-muted pl-lg-5">Page three</a></li>
                                <li className="sidebar-list-item"><a href="#" className="sidebar-link text-muted pl-lg-5">Page four</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="sidebar-list-item"><a href="login.html" className="sidebar-link text-muted"><i className="o-exit-1 mr-3 text-gray"></i><span>Login</span></a></li>
                </ul>
                <div className="text-gray-400 text-uppercase px-3 px-lg-4 py-4 font-weight-bold small headings-font-family">EXTRAS</div>
                <ul className="sidebar-menu list-unstyled">
                    <li className="sidebar-list-item"><a href="#" className="sidebar-link text-muted"><i className="o-database-1 mr-3 text-gray"></i><span>Demo</span></a></li>
                    <li className="sidebar-list-item"><a href="#" className="sidebar-link text-muted"><i className="o-imac-screen-1 mr-3 text-gray"></i><span>Demo</span></a></li>
                    <li className="sidebar-list-item"><a href="#" className="sidebar-link text-muted"><i className="o-paperwork-1 mr-3 text-gray"></i><span>Demo</span></a></li>
                    <li className="sidebar-list-item"><a href="#" className="sidebar-link text-muted"><i className="o-wireframe-1 mr-3 text-gray"></i><span>Demo</span></a></li>
                </ul>
            </div>
        )
    }
}