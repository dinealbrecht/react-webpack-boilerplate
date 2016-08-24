// import libs
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router'

// import css
import CSSModules from 'react-css-modules';
import styles, { active } from './navButton.css';

export default class NavButton extends React.Component {

  render() {
    return <Link to={this.props.url} styleName="button" activeClassName={active}>{this.props.title}</Link>
  }
}

export default CSSModules(NavButton, styles, {'allowMultiple': true});
