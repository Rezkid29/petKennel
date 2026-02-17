import React from 'react';
import './CardGrid.css';

class CardGrid extends React.Component {
  render() {
    return (
      <div className="card-grid">
        <div className="grid-header">
          <h2 className="grid-title">Our Animals</h2>
          <p className="grid-description">
            Click the button on any card to feed them and see them smile! 🐶 🦍
          </p>
        </div>
        <div className="grid-container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default CardGrid;
