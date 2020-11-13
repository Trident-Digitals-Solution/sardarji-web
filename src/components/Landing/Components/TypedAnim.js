import React from 'react'
import Typed from 'typed.js';

class TypedAnim extends React.Component {
  componentDidMount() {
    const { strings } = this.props;
    const options = {
      strings: strings,
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    };
    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
    this.typed.destroy();
  }

  render() {
    return (
      <span
        style={{ marginLeft: '20px' }}
        ref={(el) => { this.el = el; }}
      />
    );
  }
}
export default TypedAnim