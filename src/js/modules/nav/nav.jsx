// import libs
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router'

// import modules
import NavButton from '../navButton/navButton.jsx';

// import css
import CSSModules from 'react-css-modules';
import styles, {active} from './nav.css';

export default class Nav extends React.Component {
  constructor() {
    super();

    this._selectLanguage = this._selectLanguage.bind(this);
  }

  _selectLanguage() {
    this.props.openLanguage();
  }

  render() {
    return <nav styleName='nav'>
        <div styleName='inner'>
          <NavButton title='Intro' url='intro' location={this.props.location} /><br/>
          <NavButton title='About' url='about' location={this.props.location} /><br/>
        </div>
      </nav>
  }
}

export default CSSModules(Nav, styles, {'allowMultiple': true});
