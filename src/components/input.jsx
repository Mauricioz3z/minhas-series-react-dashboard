import React, { Component } from 'react'

class Input extends Component {



    render() {
        return (

            <div className="form-group">
                <label className="form-control-label text-uppercase">{this.props.label}</label>
                <input type={this.props.type} name={this.props.name}
                    placeholder={this.props.placeholder}
                    onChange={this.props.onChange}
                    value={this.props.value}
                    className="form-control"

                />

            </div>
        );
    }

}

export default Input;