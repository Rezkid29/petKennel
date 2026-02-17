import React from 'react';
import './ChildComponent.css';

class ChildComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick = () => {
    this.props.onAction(this.props.id);
  };

  render() {
    const { name, image, status } = this.props;
    const isHappy = status.includes('Happy') || status.includes('Fed');
    
    return (
      <article className="child-card">
        <div className="card-badge">
          {isHappy ? '😊' : '😢'}
        </div>
        
        <div className="card-image-wrapper">
          <img src={image} alt={name} className="card-image" />
          <div className="card-overlay">
            <span className="overlay-text">Click to interact</span>
          </div>
        </div>
        
        <div className="card-content">
          <div className="card-header">
            <h2 className="card-title">{name}</h2>
            <span className="card-id">ID: {this.props.id}</span>
          </div>
          
          <div className="card-info">
            <div className="info-row">
              <span className="info-icon">📊</span>
              <div className="info-details">
                <span className="info-label">Status</span>
                <span className="info-value">{status}</span>
              </div>
            </div>
            
            <div className="info-row">
              <span className="info-icon">🕐</span>
              <div className="info-details">
                <span className="info-label">Last Updated</span>
                <span className="info-value">Just now</span>
              </div>
            </div>
          </div>
          
          <div className="card-actions">
            <button 
              className={`action-button ${isHappy ? 'happy' : 'hungry'}`}
              onClick={this.handleClick}
              aria-label={`Feed ${name}`}
            >
              <span className="button-icon">🍽️</span>
              <span className="button-text">Feed Me!</span>
            </button>
          </div>
          
          <footer className="card-footer">
            <div className="footer-stats">
              <span className="stat">
                <strong>Type:</strong> Character
              </span>
              <span className="stat">
                <strong>Level:</strong> {isHappy ? '100' : '50'}%
              </span>
            </div>
          </footer>
        </div>
      </article>
    );
  }
}

export default ChildComponent;
