import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import asyncComponent from '../../utils/asyncComponent' 
import ErrorToast from '../../components/ErrorToast'
import PrivateRoute from '../PrivateRoute'
import { actions as appActions, getError } from '../../redux/modules/app'

const Home = asyncComponent(() => import('../Home'))
const ProductDetail = asyncComponent(() => import('../ProductDetail'))
const Search = asyncComponent(() => import('../Search'))
const SearchResult = asyncComponent(() => import('../SearchResult'))
const Login = asyncComponent(() => import('../Login'))
const User = asyncComponent(() => import('../User'))
const Purchase = asyncComponent(() => import('../Purchase'))

class APP extends Component {
  render() {
    const { error, appActions: { clearError } } = this.props;
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/login" component={Login} />
            <PrivateRoute path="/user" component={User} />
            <Route path="/detail/:id" component={ProductDetail} />
            <Route path="/search" component={Search} />
            <Route path="/search_result" component={SearchResult} />
            <PrivateRoute path="/purchase/:id" component={Purchase} />
            <Route path="/" component={Home} />
          </Switch>
        </Router>
        {error ? <ErrorToast error={error} clearError={clearError} /> : null}
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    error: getError(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    appActions: bindActionCreators(appActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(APP);
