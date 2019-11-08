import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { isLogin } from '../../redux/modules/login'

class PrivateRoute extends Component {
  render() {
    const { login, component: Component, ...rest } = this.props
    return (
      <div>
        <Route 
          {...rest}
          render={props => {
            return login ? <Component {...props}/> : 
            (
              <Redirect 
                to={{
                  pathname: '/login',
                  state: { from: props.location }
                }}
              />
            )
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    login: isLogin(state)
  }
}

export default connect(mapStateToProps)(PrivateRoute);