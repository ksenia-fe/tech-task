export const bookCellsHandler = (ship, bookedCellsArray) => {
  ship.forEach((el) => {
    bookedCellsArray.push(el);
    bookedCellsArray.push(el - 1);
    bookedCellsArray.push(el + 1);
    bookedCellsArray.push(el - 10);
    bookedCellsArray.push(el + 10);
  });
};

export const shipPlacementGenerator = (
  initCoord,
  isHorizontal,
  deckNumber,
  forbiddenCells
) => {
  let shipCoord = [];
  const cellsBooked = Array.from(new Set(forbiddenCells)).filter(
    (el) => el > 0
  );
  if (isHorizontal) {
    shipCoord = [
      initCoord,
      deckNumber > 1 && initCoord - 1,
      deckNumber > 2 && initCoord - 2,
      deckNumber > 3 && initCoord - 3,
    ];
  } else if (initCoord - 3 < 0) {
    shipCoord = [
      initCoord,
      deckNumber > 1 && initCoord + 1,
      deckNumber > 2 && initCoord + 2,
      deckNumber > 3 && initCoord + 3,
    ];
  } else if (initCoord - 30 < 0) {
    shipCoord = [
      initCoord,
      deckNumber > 1 && initCoord + 10,
      deckNumber > 2 && initCoord + 20,
      deckNumber > 3 && initCoord + 30,
    ];
  } else {
    shipCoord = [
      initCoord,
      deckNumber > 1 && initCoord - 10,
      deckNumber > 2 && initCoord - 20,
      deckNumber > 3 && initCoord - 30,
    ];
  }

  if (
    deckNumber === 4 &&
    !cellsBooked.includes(initCoord) &&
    !cellsBooked.includes(initCoord + 4) &&
    !cellsBooked.includes(initCoord + 3) &&
    !cellsBooked.includes(initCoord + 2) &&
    !cellsBooked.includes(initCoord + 1) &&
    !cellsBooked.includes(initCoord - 1) &&
    !cellsBooked.includes(initCoord - 2) &&
    !cellsBooked.includes(initCoord - 3) &&
    !cellsBooked.includes(initCoord - 4) &&
    !cellsBooked.includes(initCoord + 40) &&
    !cellsBooked.includes(initCoord + 30) &&
    !cellsBooked.includes(initCoord + 20) &&
    !cellsBooked.includes(initCoord + 10) &&
    !cellsBooked.includes(initCoord - 10) &&
    !cellsBooked.includes(initCoord - 20) &&
    !cellsBooked.includes(initCoord - 30) &&
    !cellsBooked.includes(initCoord - 40)
  ) {
    return shipCoord;
  } else if (
    deckNumber === 3 &&
    !cellsBooked.includes(initCoord) &&
    !cellsBooked.includes(initCoord + 3) &&
    !cellsBooked.includes(initCoord + 2) &&
    !cellsBooked.includes(initCoord + 1) &&
    !cellsBooked.includes(initCoord - 1) &&
    !cellsBooked.includes(initCoord - 2) &&
    !cellsBooked.includes(initCoord - 3) &&
    !cellsBooked.includes(initCoord + 30) &&
    !cellsBooked.includes(initCoord + 20) &&
    !cellsBooked.includes(initCoord + 10) &&
    !cellsBooked.includes(initCoord - 10) &&
    !cellsBooked.includes(initCoord - 20) &&
    !cellsBooked.includes(initCoord - 30)
  ) {
    return shipCoord;
  } else if (
    deckNumber === 2 &&
    !cellsBooked.includes(initCoord) &&
    !cellsBooked.includes(initCoord + 2) &&
    !cellsBooked.includes(initCoord + 1) &&
    !cellsBooked.includes(initCoord - 1) &&
    !cellsBooked.includes(initCoord - 2) &&
    !cellsBooked.includes(initCoord + 20) &&
    !cellsBooked.includes(initCoord + 10) &&
    !cellsBooked.includes(initCoord - 10) &&
    !cellsBooked.includes(initCoord - 20)
  ) {
    return shipCoord;
  } else if (
    deckNumber === 1 &&
    !cellsBooked.includes(initCoord) &&
    !cellsBooked.includes(initCoord + 1) &&
    !cellsBooked.includes(initCoord - 1) &&
    !cellsBooked.includes(initCoord + 10) &&
    !cellsBooked.includes(initCoord - 10)
  ) {
    return shipCoord;
  }
  return shipCoord;
};
