import React, { Component } from 'react';
import Header from './Header';
import CardGrid from './CardGrid';
import ChildComponent from './childComponent';
import { initialData } from './data';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: initialData
    };
  }

  handleUpdate = (id) => {
    const updatedCharacters = this.state.characters.map((char) => {
      if (char.id === id) {
        // Check if it's a gorilla or a dog
        const isGorilla = char.name.includes('Gorilla');
        return {
          ...char,
          image: isGorilla ? '/images/happy-gorilla.png' : '/images/happy-dog.png',
          status: '✨ Happy & Fed!'
        };
      }
      return char;
    });
    this.setState({ characters: updatedCharacters });
  };

  getHappyCount = () => {
    return this.state.characters.filter(char => 
      char.status.includes('Happy') || char.status.includes('Fed')
    ).length;
  };

  render() {
    return (
      <div className="app-container">
        <Header 
          totalPets={this.state.characters.length}
          happyPets={this.getHappyCount()}
        />
        
        <CardGrid>
          {this.state.characters.map((char) => (
            <ChildComponent
              key={char.id}
              id={char.id}
              name={char.name}
              image={char.image}
              status={char.status}
              onAction={this.handleUpdate}
            />
          ))}
        </CardGrid>
      </div>
    );
  }
}

export default App;
