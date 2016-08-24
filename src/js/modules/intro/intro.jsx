// import libs
import React from 'react';
import ReactDOM from 'react-dom';

// import css
import CSSModules from 'react-css-modules';
import styles from './intro.css';

export default class Intro extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.state = this.props.copy.intro;
  }

  render() {
    return <div styleName="wrapper">
      {this.state.title}
    </div>
  }
}

export default CSSModules(Intro, styles, {'allowMultiple': true});
