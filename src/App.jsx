import logo from "/logo.png";

import "./App.css";

import { useState } from "react";

import { makeShuffledDeck } from "./utils.jsx";
import UI from "./UI.jsx";
import Card from "./Card.jsx";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App(props) {
  // Set default value of card deck to new shuffled deck
  const [cardDeck, setCardDeck] = useState(makeShuffledDeck());
  // currCards holds the cards from the current round
  const [currCards, setCurrCards] = useState([]);
  // condition to check if game
  const [inGame, setInGame] = useState(true);
  const [inRound, setInRound] = useState(true);
  const [endMessage, setEndMessage] = useState("");
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);

  const dealCards = () => {
    const newCurrCards = [cardDeck.pop(), cardDeck.pop()];
    setCurrCards(newCurrCards);
    setInRound(true);
  };
  // You can write JavaScript here, just don't try and set your state!

  const checkCards = (cards) => {
    if(cards.length != 0)
    {
      if(cards[0].rank > cards[1].rank)
      {
        setScore1(score1 + 1);
        setInRound(false);
        return (
          <p>Player 1 won this round!</p>
        );
      }
      else if(cards[1].rank > cards[0].rank)
      {
        setScore2(score2 + 1);
        setInRound(false);
        return (
          <p>Player 2 won this round!</p>
        );
      }
      else if(cards[0].rank == cards[1].rank)
      {
        if(cards[0].suit == 'Spades')
        {
          setScore1(score1 + 1);
          setInRound(false);
          return (
            <p>Player 1 won this round!</p>
          );
        }
        else if(cards[0].suit == 'Hearts' && cards[1].suit == "Clubs" || cards[1].suit == "Diamonds")
        {
          setScore1(score1 + 1);
          setInRound(false);
          return (
            <p>Player 1 won this round!</p>
          );
        }
        else if(cards[0].suit == 'Clubs' && cards[1].suit == "Diamond")
        {
          setScore1(score1 + 1);
          setInRound(false);
          return (
            <p>Player 1 won this round!</p>
          );
        }
        else
        {
          setScore2(score2 + 1);
          setInRound(false);
          return (
            <p>Player 2 won this round!</p>
          );
        }
      }
    }
  };

  const scoreBoard = () => {
    return (
      <Row className="score">
        <Col>Score: {score1}</Col>
        <Col>Score: {score2}</Col>
      </Row>
    );
  };

  const checkDeck = (cardDeck) => {
    if(cardDeck.length == 0 && inGame)
    {
      setInGame(false);
      setInRound(false);
      setCurrCards([]);
      if(score1 > score2) setEndMessage("Player 1 won!");
      else if(score2 > score1) setEndMessage("Player 2 won!");
      else setEndMessage("Draw!");
    }
  };

  const reset = () => {
    setScore1(0);
    setScore2(0);
    setCardDeck(makeShuffledDeck());
    setCurrCards([]);
    setInGame(true);
    setInRound(true);
    setEndMessage("");
  };

  return (
    <>
      <div>
        <img src={logo} className="logo" alt="Rocket logo" />
      </div>
      <div className="main">
        <h2>React High Card 🚀</h2>
        <Container>
            <Row className='row'>
                <Col>Player 1</Col>
                <Col>Player 2</Col>
            </Row>
            <UI cards={currCards}/>
            <Card cards={currCards}/>
            {inRound && checkCards(currCards)}
            {scoreBoard()}
        </Container>
        <br />
        <button onClick={() => { inGame ? dealCards() : reset()}}>
          {inGame ? "Deal" : "Reset"}
        </button>
        {checkDeck(cardDeck)}
        {endMessage && <p>{endMessage}</p>}
      </div>
    </>
  );
}

export default App;
