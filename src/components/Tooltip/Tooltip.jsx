import React from 'react';
import cn from 'classnames';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './style.scss';

export default class Tooltip extends React.Component {
  state = {
    hovered: false,
  }

  handleClick = () => {
    if (this.props.onClick && typeof this.props.onClick === 'function') {
      this.props.onClick();
    }
  }

  render() {
    return (
      <div className="tooltip-container">
        <div
          className="tooltip-icon"
          onMouseEnter={() => this.setState({ hovered: true })}
          onMouseLeave={() => this.setState({ hovered: false })}
        >
          <FontAwesomeIcon icon={this.props.icon} onClick={this.handleClick} />
          <div className={cn('tooltip-message', { hovered: this.state.hovered })}>
            {this.props.message}
          </div>
        </div>
      </div>
    );
  }
}
