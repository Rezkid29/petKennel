import React from 'react';
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <header className="app-header">
        <div className="header-content">
          <div className="header-icon">🐾</div>
          <h1 className="header-title">Pet Kennel Manager</h1>
          <p className="header-subtitle">Feed your animals and watch them get happy!</p>
          <div className="header-stats">
            <span className="stat-badge">
              {this.props.totalPets} {this.props.totalPets === 1 ? 'Pet' : 'Pets'}
            </span>
            <span className="stat-badge">
              {this.props.happyPets} Happy
            </span>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
