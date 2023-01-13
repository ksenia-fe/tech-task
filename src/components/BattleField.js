import Cell from "./Cell";

import styled from "./BattleField.module.css";

const BattleField = ({ cells, generatedShip }) => {
  return (
    <div className={styled.field}>
      {cells.map((cell, index) => {
        const isShip =
          generatedShip.filter((el) => index + 1 === el).length > 0;
        return <Cell key={index} isShip={isShip} />;
      })}
    </div>
  );
};

export default BattleField;
