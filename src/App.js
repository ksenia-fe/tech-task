import { useState } from "react";
import BattleField from "./components/BattleField";
import {
  bookCellsHandler,
  shipPlacementGenerator,
} from "./helpers/shipPlacementGenerator";

import styled from "./App.module.css";

function App() {
  const [initCoord, setInitCoord] = useState({});
  const cells = [...Array(100).keys()];
  const randomInitPlacementFourDeck =
    (initCoord.fourDeckDig - 1).toString() + initCoord.fourDeck;

  const shipsGenerator = (initCoord) => {
    let forbiddenCellsAround = [];
    let allowedCells = [...Array(100).keys()].filter(
      (e) => !~forbiddenCellsAround.indexOf(e)
    );

    // расчитываем, будет ли корабль расположен горизонтально
    const isHorizontal = (deckNumber) => {
      switch (deckNumber) {
        case 4:
          return (
            +(randomInitPlacementFourDeck - 4).toString().split("")[0] ===
              initCoord[1] - 1 &&
            +(randomInitPlacementFourDeck + 4).toString().split("")[0] ===
              initCoord[1] - 1
          );
        case 31:
          return (
            +(randomInitPlacementFourDeck - 3).toString().split("")[2] ===
              initCoord[3] - 1 &&
            +(randomInitPlacementFourDeck + 3).toString().split("")[2] ===
              initCoord[3] - 1
          );
        case 32:
          return (
            +(randomInitPlacementFourDeck - 3).toString().split("")[4] ===
              initCoord[5] - 1 &&
            +(randomInitPlacementFourDeck + 3).toString().split("")[4] ===
              initCoord[5] - 1
          );
        case 21:
          return (
            +(randomInitPlacementFourDeck - 2).toString().split("")[6] ===
              initCoord[7] - 1 &&
            +(randomInitPlacementFourDeck + 2).toString().split("")[6] ===
              initCoord[7] - 1
          );
        case 22:
          return (
            +(randomInitPlacementFourDeck - 2).toString().split("")[8] ===
              initCoord[9] - 1 &&
            +(randomInitPlacementFourDeck + 2).toString().split("")[8] ===
              initCoord[9] - 1
          );
        case 23:
          return (
            +(randomInitPlacementFourDeck - 2).toString().split("")[10] ===
              initCoord[11] - 1 &&
            +(randomInitPlacementFourDeck + 2).toString().split("")[10] ===
              initCoord[11] - 1
          );

        default:
          return true;
      }
    };
    // генерируем четырёхпалубный корабль
    const fourDeckShip = shipPlacementGenerator(
      +randomInitPlacementFourDeck,
      isHorizontal(4),
      4,
      forbiddenCellsAround
    );
    console.log("forbiddenCellsAround 1: ", forbiddenCellsAround);
    const cellsLeftFirst = allowedCells.filter(
      (e) => !~forbiddenCellsAround.indexOf(e)
    );
    const randomPlacementHandler = (allowedCells) => {
      const arrayOfLeftCells = allowedCells.filter(
        (e) => !~forbiddenCellsAround.indexOf(e)
      );
      let randomPoint =
        arrayOfLeftCells[Math.floor(Math.random() * arrayOfLeftCells.length)];
      if (
        arrayOfLeftCells.includes(randomPoint) ||
        arrayOfLeftCells.includes(initCoord + 3) ||
        arrayOfLeftCells.includes(initCoord + 2) ||
        arrayOfLeftCells.includes(initCoord + 1) ||
        arrayOfLeftCells.includes(initCoord - 1) ||
        arrayOfLeftCells.includes(initCoord - 2) ||
        arrayOfLeftCells.includes(initCoord - 3) ||
        arrayOfLeftCells.includes(initCoord + 30) ||
        arrayOfLeftCells.includes(initCoord + 20) ||
        arrayOfLeftCells.includes(initCoord + 10) ||
        arrayOfLeftCells.includes(initCoord - 10) ||
        arrayOfLeftCells.includes(initCoord - 20) ||
        arrayOfLeftCells.includes(initCoord - 30)
      ) {
        randomPoint =
          arrayOfLeftCells[Math.floor(Math.random() * arrayOfLeftCells.length)];
      }
      return randomPoint;
    };
    const placementFirst =
      cellsLeftFirst[Math.floor(Math.random() * cellsLeftFirst.length)];
    bookCellsHandler(fourDeckShip, forbiddenCellsAround);
    console.log({ cellsLeftFirst });

    // генерируем трёхпалубныe корабли
    const threeDeckShip = shipPlacementGenerator(
      // +randomInitPlacementThreeDeck,
      placementFirst,
      // randomPlacementHandler(allowedCells),
      isHorizontal(31),
      3,
      forbiddenCellsAround
    );
    const cellsLeft = [...Array(100).keys()].filter(
      (e) => !~forbiddenCellsAround.indexOf(e) && e !== 0
    );
    const placement = cellsLeft[Math.floor(Math.random() * cellsLeft.length)];
    bookCellsHandler(threeDeckShip, forbiddenCellsAround);
    console.log({ cellsLeft });

    const threeDeckShipTwo = shipPlacementGenerator(
      placement,
      isHorizontal(32),
      3,
      forbiddenCellsAround
    );
    const cellsLeftTwo = [...Array(100).keys()].filter(
      (e) => !~forbiddenCellsAround.indexOf(e) && e !== 0
    );
    const placementTwo =
      cellsLeftTwo[Math.floor(Math.random() * cellsLeftTwo.length)];
    bookCellsHandler(threeDeckShipTwo, forbiddenCellsAround);
    console.log({ cellsLeftTwo });

    // генерируем двухпалубныe корабли
    const twoDeckShip = shipPlacementGenerator(
      placementTwo,
      isHorizontal(21),
      2,
      forbiddenCellsAround
    );
    const cellsLeftThree = [...Array(100).keys()].filter(
      (e) => !~forbiddenCellsAround.indexOf(e) && e !== 0
    );
    const placementThree =
      cellsLeftThree[Math.floor(Math.random() * cellsLeftThree.length)];
    bookCellsHandler(twoDeckShip, forbiddenCellsAround);
    console.log({ cellsLeftThree });

    const twoDeckShipTwo = shipPlacementGenerator(
      // +randomInitPlacementTwoDeckTwo,
      placementThree,
      isHorizontal(22),
      2,
      forbiddenCellsAround
    );
    const cellsLeftFour = [...Array(100).keys()].filter(
      (e) => !~forbiddenCellsAround.indexOf(e) && e !== 0
    );
    const placementFour =
      cellsLeftFour[Math.floor(Math.random() * cellsLeftFour.length)];
    bookCellsHandler(twoDeckShipTwo, forbiddenCellsAround);
    console.log({ cellsLeftFour });

    const twoDeckShipThree = shipPlacementGenerator(
      // +randomInitPlacementTwoDeckThree,
      placementFour,
      isHorizontal(23),
      2,
      forbiddenCellsAround
    );
    const cellsLeftFive = [...Array(100).keys()].filter(
      (e) => !~forbiddenCellsAround.indexOf(e) && e !== 0
    );
    const placementFive =
      cellsLeftFive[Math.floor(Math.random() * cellsLeftFive.length)];
    bookCellsHandler(twoDeckShipThree, forbiddenCellsAround);
    console.log({ cellsLeftFive });

    // генерируем корабли с одной палубой
    const oneDeckShip = shipPlacementGenerator(
      // +randomInitPlacementOneDeck,
      placementFive,
      isHorizontal(1),
      1,
      forbiddenCellsAround
    );
    const cellsLeftSix = [...Array(100).keys()].filter(
      (e) => !~forbiddenCellsAround.indexOf(e) && e !== 0
    );
    const placementSix =
      cellsLeftSix[Math.floor(Math.random() * cellsLeftSix.length)];
    bookCellsHandler(oneDeckShip, forbiddenCellsAround);
    console.log({ cellsLeftSix });

    const oneDeckShipTwo = shipPlacementGenerator(
      // +randomInitPlacementOneDeckTwo,
      placementSix,
      isHorizontal(1),
      1,
      forbiddenCellsAround
    );
    const cellsLeftSeven = [...Array(100).keys()].filter(
      (e) => !~forbiddenCellsAround.indexOf(e) && e !== 0
    );
    const placementSeven =
      cellsLeftSeven[Math.floor(Math.random() * cellsLeftSeven.length)];
    bookCellsHandler(oneDeckShipTwo, forbiddenCellsAround);
    console.log({ cellsLeftSeven });

    const oneDeckShipThree = shipPlacementGenerator(
      // +randomInitPlacementOneDeckThree,
      placementSeven,
      isHorizontal(1),
      1,
      forbiddenCellsAround
    );
    const cellsLeftEight = [...Array(100).keys()].filter(
      (e) => !~forbiddenCellsAround.indexOf(e) && e !== 0
    );
    const placementEight =
      cellsLeftEight[Math.floor(Math.random() * cellsLeftEight.length)];
    bookCellsHandler(oneDeckShipThree, forbiddenCellsAround);

    const oneDeckShipFour = shipPlacementGenerator(
      // +randomInitPlacementOneDeckFour,
      placementEight,
      isHorizontal(1),
      1,
      forbiddenCellsAround
    );
    bookCellsHandler(oneDeckShipFour, forbiddenCellsAround);
    const ships = [
      fourDeckShip,
      threeDeckShip,
      threeDeckShipTwo,
      twoDeckShip,
      twoDeckShipTwo,
      twoDeckShipThree,
      oneDeckShip,
      oneDeckShipTwo,
      oneDeckShipThree,
      oneDeckShipFour,
    ];
    console.log({
      forbiddenCellsAround: Array.from(new Set(forbiddenCellsAround)).filter(
        (el) => el > 0
      ),
      ships,
    });
    return [
      ...fourDeckShip,
      ...threeDeckShip,
      ...threeDeckShipTwo,
      ...twoDeckShip,
      ...twoDeckShipTwo,
      ...twoDeckShipThree,
      ...oneDeckShip,
      ...oneDeckShipTwo,
      ...oneDeckShipThree,
      ...oneDeckShipFour,
    ];
  };

  return (
    <div className={styled.app}>
      <p>Bielikova Ksenia task</p>
      <BattleField
        cells={cells}
        generatedShip={
          Object.keys(initCoord).length > 0 ? shipsGenerator(initCoord) : []
        }
      />
      <button
        onClick={() => {
          setInitCoord({
            fourDeck: Math.floor(Math.random() * (10 - 1) + 1),
            fourDeckDig: Math.floor(Math.random() * (11 - 1) + 1),
          });
        }}
      >
        {typeof initCoord.fourDeck === "number" ? "Restart" : "Start"}
      </button>
    </div>
  );
}

export default App;
