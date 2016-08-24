// import libs
import React from 'react';
import ReactDOM from 'react-dom';

// import css
import CSSModules from 'react-css-modules';
import styles from './about.css';

export default class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.state = this.props.copy.about;
  }

  render() {
    return <div styleName="wrapper">
      {this.state.title}
    </div>
  }
}

export default CSSModules(About, styles, {'allowMultiple': true});
