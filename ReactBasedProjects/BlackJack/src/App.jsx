import React, { useState } from "react";

export default function App() {
  const [cards, setCards] = useState([]);
  const [sum, setSum] = useState(0);
  const [isAlive, setIsAlive] = useState(false);
  const [message, setMessage] = useState("Welcome to Blackjack!");

  function getRandomCard() {
    const value = Math.floor(Math.random() * 13) + 1;
    if (value === 1) return 11;
    if (value > 10) return 10;
    return value;
  }

  function pickCard() {
    const firstCard = getRandomCard();
    const secondCard = getRandomCard();
    const newCards = [firstCard, secondCard];
    const newSum = firstCard + secondCard;

    setCards(newCards);
    setSum(newSum);
    setIsAlive(true);
    updateGame(newSum);
  }

  function drawNewCard() {
    if (isAlive && sum < 21) {
      const newCard = getRandomCard();
      const updatedCards = [...cards, newCard];
      const updatedSum = sum + newCard;

      setCards(updatedCards);
      setSum(updatedSum);
      updateGame(updatedSum);
    }
  }

  function updateGame(currentSum) {
    if (currentSum < 21) {
      setMessage("Pick a New Card");
    } else if (currentSum === 21) {
      setMessage("BlackJack!!!");
      setIsAlive(false);
    } else {
      setMessage("You Lose!!!");
      setIsAlive(false);
    }
  }

  return (
    <div className="bg-gradient-to-r from-emerald-500 to-emerald-900 h-screen">
      <h1 className="text-yellow-400 font-black text-7xl text-center pt-20">Black Jack</h1>
      <p className="text-white font-black text-3xl text-center mt-10">{message}</p>
      <p className="text-white font-black text-3xl text-center mt-10">Cards: {cards.join(" ")}</p>
      <p className="text-white font-black text-3xl text-center mt-10">Sum: {sum}</p>
      <div className="flex justify-evenly mt-10">
        <button
          onClick={pickCard}
          className="text-[#016f32] bg-yellow-400 text-3xl p-4 rounded-xl cursor-pointer"
        >
          START GAME
        </button>
        <button
          onClick={drawNewCard}
          className="text-[#016f32] bg-yellow-400 text-3xl p-4 rounded-xl cursor-pointer"
        >
          NEW CARD
        </button>
      </div>
      <p className="text-white font-black text-3xl text-center mt-10">User: $120</p>
    </div>
  );
}
