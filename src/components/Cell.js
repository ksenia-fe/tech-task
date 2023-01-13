import styled from "./Cell.module.css";

const Cell = ({ isShip }) => {
  return <div className={`${styled.cell} ${isShip && styled.ship}`} />;
};

export default Cell;
