import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ErrorToast from '../../components/ErrorToast'
import Home from '../Home'
import ProductDetail from '../ProductDetail'
import { actions as appActions, getError } from '../../redux/modules/app'

class APP extends Component {
  render() {
    const { error, appActions: { clearError } } = this.props;
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/detail/:id" component={ProductDetail} />
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
