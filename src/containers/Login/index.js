import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import LoginHeader from './component/LoginHeader'
import LoginForm from './component/LoginForm'
import {
  getUsername,
  getPassword,
  isLogin,
  actions as loginActions
} from "../../redux/modules/login"
import { Redirect } from "react-router-dom"
import { connect } from "react-redux"

class Login extends Component {
  render() {
    const { username, password, login, location: {state} } = this.props
    if(login) {
      if(state && state.form) {
        return <Redirect to={state.form} />
      }
      return <Redirect to="/user" />
    }
    return (
      <div>
        <LoginHeader />
        <LoginForm 
          username={username}
          password={password}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
      </div>
    );
  }

  // input元素改变的响应函数
  handleChange = (e) => {
    const { setUsername, setPassword } = this.props.loginActions
    if(e.target.name === 'username') {
      setUsername(e.target.value)
    } else if(e.target.name === 'password') {
      setPassword(e.target.value)
    }
  }

  // 登录
  handleSubmit = () => {
    this.props.loginActions.login();
  };
}

const mapStateToProps = (state, props) => {
  return {
    username: getUsername(state),
    password: getPassword(state),
    login: isLogin(state)
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    loginActions: bindActionCreators(loginActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);