import React, { Component } from 'react';
import './style.css'

class ErrorToast extends Component {
    render() {
        const  { msg } = this.props
        return (
            <div className="errorToast">
                <div className="errorToast__text">
                    {msg}
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.timerId = setTimeout(() => {
            this.props.clearError()
        }, 3000)
    }

    componentWillUnmount() {
        if(this.timerId) {
            clearTimeout(this.timerId)
        }
    }
}

export default ErrorToast;