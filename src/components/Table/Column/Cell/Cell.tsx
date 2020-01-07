import React, { Component } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Wrapper, Content } from './Cell.style';

interface CellProps {
  id: string;
  title: string;
  index: number;
}

class Cell extends Component<CellProps> {
  private defaultProps = {
    items: [],
  };

  public render() {
    const { children, id, title, index, ...props } = this.props;
    return (
      <Draggable draggableId={id} index={index}>
        {(provided) => (
          <Wrapper
            ref={provided.innerRef}
            {...props}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            innerRef={provided.innerRef}
          >
            <Content>{title}</Content>
          </Wrapper>
        )}
      </Draggable>
    );
  }
}

export default Cell;
