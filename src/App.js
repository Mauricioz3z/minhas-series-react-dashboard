import React, { Component,Fragment } from 'react';
import { Link } from 'react-router';
import Header from './partials/header'
import Footer from './partials/footer'
import Sidebar from './partials/sidebar'

export default class App extends Component {
  render(){
    return (
      <Fragment>
        <Header />
        <div className="d-flex align-items-stretch">
          <Sidebar />
          <div className="page-holder w-100 d-flex flex-wrap">
            <div className="container-fluid px-xl-5">
              <section className="py-5">
                <div className="row">
                  {this.props.children}
                </div>
              </section>
            </div>
            <Footer />
          </div>
        </div>
      </Fragment>
    );
  }
}