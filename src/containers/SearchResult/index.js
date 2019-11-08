import React, { Component } from 'react';
import { connect } from 'react-redux'
import SearchHeader from './components/SearchHeader'
import Banner from '../../components/Banner'
import KeywordBox from './components/KeywordBox'
import ShopList from './components/ShopList'
import { getSearchedShops, getCurrentKeyword } from '../../redux/modules/search';

class SearchResult extends Component {
  render() {
    const { shops, currentKeyword} = this.props;
    return (
      <div>
        <SearchHeader onBack={this.handleBack} onSearch={this.handleSearch} />
        <KeywordBox text={currentKeyword} />
        <Banner dark />
        <ShopList data={shops} />
      </div>
    );
  }

  handleBack = () => {
    this.props.history.push('/')
  }

  handleSearch = () => {
    this.props.history.push('/search')
  }
}

const mapStateToProps = (state, props) => {
  return {
    shops: getSearchedShops(state),
    currentKeyword: getCurrentKeyword(state)
  }
}

export default connect(mapStateToProps, null)(SearchResult);