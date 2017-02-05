import React, { Component, PropTypes } from 'react';

class Tooltip extends Component {
  componentDidMount () {
    const { options = {} } = this.props;

    if (typeof $ !== undefined) {
      $(this._tooltip).tooltip(options);
    }
  }

  componentWillUnmount () {
    if (typeof $ !== undefined) {
      $(this._tooltip).tooltip('remove');
    }
  }

  render () {
    const { children } = this.props;
    let child = children;
    if (typeof children === 'string') {
      child = <span>{ children }</span>;
    }

    return (
      React.cloneElement(
        child, { ref: (el) => { this._tooltip = el; } }
      )
    );
  }
}

Tooltip.propTypes = {
  /**
    * The trigger for the tooltip
    */
  children: React.PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string
  ]),
  className: PropTypes.string,
  options: PropTypes.shape({
    /**
     * Delay time before tooltip appears. (Default: 350)
     */
    delay: PropTypes.number,
    /**
     * Tooltip text. Can use custom HTML if you set the html option.
     */
    tooltip: PropTypes.string,
    /**
     * Set the direction of the tooltip. 'top', 'right', 'bottom', 'left'. (Default: 'bottom')
     */
    position: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
    /**
     * Allow custom html inside the tooltip. (Default: false)
     */
    html: PropTypes.bool
  })
};

export default Tooltip;
