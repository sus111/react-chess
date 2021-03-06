import React, { Component, PropTypes } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Square from './square';
import Knight from './knight';
import { canMoveKnight, moveKnight } from './game';

class Board extends Component {
  renderSquare (i) {
    const x = i % 8;
    const y = Math.floor(i / 8);
    const black = (x + y) % 2 === 1;

    const [knightX, knightY] = this.props.knightPosition;
    const piece = (x === knightX && y === knightY) ?
      <Knight /> :
      null;

    return (
      <div key={i}
           style={{ width: '120px', height: '120px'}}
           onClick={() => this.handleSquareClick(x,y)}>
        <Square black={black}>
          {piece}
        </Square>
      </div>
    );
  }

  handleSquareClick(toX, toY) {
    if (canMoveKnight(toX, toY)){
      moveKnight(toX, toY);
    }
  }

  render() {
    const squares = [];
    for (let i = 0; i < 64; i++) {
      squares.push(this.renderSquare(i));
    }

    return (
      <div style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexWrap: 'wrap'
      }}>
        {squares}
      </div>
    );
  }

}

export default DragDropContext(HTML5Backend)(Board);

Board.propTypes = {
  knightPosition: PropTypes.arrayOf(
    PropTypes.number.isRequired
  ).isRequired
};
