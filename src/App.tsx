import React, { useEffect, useState } from 'react';
import './App.css';
import HangmanDrawing from './Components/HangmanDrawing';
import Alphabet from './Components/Alphabet';
import alphabetData from './alphabetData';
import gameWords from './gameWords';

export interface Letter {
  letter: string;
  clicked: boolean;
}

export interface Attempts {
  number: number;
  letters: Set<string>;
}
 
function setRandomWord() {
  const randomIndex = Math.floor(Math.random() * gameWords.length);
  const randomWord = gameWords[randomIndex].word;
  return randomWord;
}

function App() {
  const [gameWon, setGameWon] = useState<boolean>(false)
  const [attempts, setAttempts] = useState<Attempts>({ number: 0, letters: new Set<string>([]) });
  const [gameWord, setGameWord] = useState<string>("");
  const [alphabet, setAlphabet] = useState<Letter[]>(alphabetData);

  useEffect(() => {
    setGameWord(setRandomWord());
  }, []);

  // Faz um update no state attempts com a selected letter
  function getLetter(selectedLetter: string) {

    let found = alphabet.some(letter => {
      let found = false

      if (letter.letter.toLowerCase() === selectedLetter.toLowerCase() && letter.clicked) {
        return found = true;
      } else {
        return found = false;
      }
    });
    
    if (found) {
      return // breaks getLetter
    }
    
    setAttempts(prevState => ({
      ...prevState,
      letters: new Set([...prevState.letters, selectedLetter])
    }));

    if (gameWord.toLowerCase().includes(selectedLetter.toLowerCase())) {
    } else {
      setAttempts(prevState => ({
        ...prevState,
        number: prevState.number + 1
      }));
    } 

    setAlphabet(prevAlphabet => 
      prevAlphabet.map(letter => 
        letter.letter.toLowerCase() === selectedLetter.toLowerCase() 
          ? { ...letter, clicked: true }
          : letter
      )
    );
  }

  // const RenderLetters = () => {
  //   return gameWord.split('').map((letter, index) => (
  //     <span key={index}>
  //       {attempts.letters.has(letter.toLowerCase()) ? letter : '_ '}
  //     </span>
  //   ));
  // };

  const RenderLetters = () => {
    let underscoreCount = 0;

    if(gameWord === ""){
      return
    }
  
    const renderedLetters = gameWord.split('').map((letter, index) => {
      const isVisible = attempts.letters.has(letter.toLowerCase());
      if (!isVisible) {
        underscoreCount++;
      }

      return (
        <span key={index}>
          {isVisible ? letter : '_ '}
        </span>
      );
    });
  
    if(underscoreCount === 0){
      setGameWon(prevState => true)
    }
  
    return (
      <div>
        {renderedLetters}
      </div>
    );
  };

  return (
    <div className='container'>
      <div className="game-word">
        <RenderLetters />
      </div>
      <HangmanDrawing attempts={attempts} gameWon={gameWon}/>
      {(attempts.number < 6 && gameWon === false) &&
        <Alphabet alphabet={alphabet} getLetter={getLetter} />
      }
    </div>
  );
}

export default App;