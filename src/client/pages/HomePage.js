import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRepos } from '../actions';

class HomePage extends Component {
  componentDidMount() {
      this.props.fetchRepos();
  }

  renderRepos() {
    return this.props.repos.map(rep => {
      return <li key={rep.id}>{rep.name}</li>;
    });
  }

  render() {
    return (
      <div className="center-align" style={{ marginTop: '200px' }}>
        <h3>Welcome to Rect Server Side Rendering</h3>
        <h5>My List Of Repos</h5>
        <ul>{this.renderRepos()}</ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { repos: state.repos }
}

function loadData(store) {
  return store.dispatch(fetchRepos());
}

export default {
  loadData,
  component: connect(mapStateToProps, { fetchRepos })(HomePage)
}
