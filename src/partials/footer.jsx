import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer bg-white shadow align-self-end py-3 px-xl-5 w-100">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-left text-primary">
                            <p className="mb-2 mb-md-0">Your company &copy; 2018-2020</p>
                        </div>
                        <div className="col-md-6 text-center text-md-right text-gray-400">
                            <p className="mb-0">Design by <a href="https://bootstrapious.com/admin-templates" className="external text-gray-400">Bootstrapious</a></p>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}