// import libs
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory, IndexRedirect } from 'react-router';

// import modules
import Nav from '../nav/nav.jsx';
import Intro from '../intro/intro.jsx';
import About from '../about/about.jsx';

// import css
import CSSModules from 'react-css-modules';
import styles, {wrapper, content, inner} from './app.css';

// import constants
import { ENGLISH, GERMAN } from '../../constants/languages';

import english from 'json!../../../assets/json/english.json';
import russian from 'json!../../../assets/json/german.json';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  _addChildren() {
    let props = {
      language: ENGLISH,
      copy: english
    }

    return this.props.children ? React.cloneElement(this.props.children, props) : this.props.children;
  }

  render() {
    return <div>
      <Nav location={this.props.location}/>
      <div>
        <section>
          { this._addChildren() }
        </section>
      </div>
    </div>
  }
}

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRedirect to="/intro" />
      <Route path="/" component={Intro}/>
      <Route path="intro" component={Intro}/>
      <Route path="about" component={About}/>
    </Route>
  </Router>
), document.getElementById('app'));

export default CSSModules(App, styles, {'allowMultiple': true});
