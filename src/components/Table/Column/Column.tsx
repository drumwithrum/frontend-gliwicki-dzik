import React, { Component } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Cell from './Cell'
import { Wrapper, Title, List } from './Column.style';

interface ColumnProps {
  items: {
    id: string;
    title: string;
  }[];
  title: string;
}

class Column extends Component<ColumnProps> {
  private defaultProps = {
    items: [],
  };

  public render() {
    const { children, items, title, ...props } = this.props;
    return (
      <Wrapper {...props}>
        <Title>{title}</Title>
        <Droppable droppableId={title}>
          {(provided) => (
            <List
              {...provided.droppableProps}
              innerRef={provided.innerRef}
            >
              {items.map((item, index) => (
                <Cell key={item.id} id={item.id} title={item.title} index={index} />
              ))}
              {provided.placeholder}
            </List>
          )}
        </Droppable>
      </Wrapper>
    );
  }
}

export default Column;
