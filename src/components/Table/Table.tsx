import React, { Component } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import Column from './Column';
import { Wrapper } from './Table.style';

interface TableProps {
  onChange?: (columns: any) => void;
  columns: {
    [key: string]: {
      title: string;
      itemIds: string[];
    };
  };
}

class Table extends Component<TableProps> {
  public static defaultProps = {
    columns: {},
  };

  public state = {
    columns: {},
  };

  public componentDidMount() {
    const { columns } = this.props;
    this.setState({ columns });
  }

  public onDragEnd = (result: any): void => {
    const { onChange } = this.props;
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId
        && destination.index === source.index
    ) {
      return;
    }
    const { columns } = this.props;
    const keys = Object.keys(columns);
    const vals = Object.values(columns);
    let startItemIndex = 0;
    let finishItemIndex = 0;
    const start: any = vals.find((item: any, index) => {
      if (item.title.includes(source.droppableId)) {
        startItemIndex = index;
        return item;
      }
    })!;
    const finish: any = vals.find((item: any, index) => {
      if (item.title.includes(destination.droppableId)) {
        finishItemIndex = index;
        return item;
      }
    })!;
    if (start === finish) {
      const columnKey = keys[startItemIndex];
      const newItemIds = Array.from(start.itemIds);
      newItemIds.splice(source.index, 1);
      newItemIds.splice(destination.index, 0, draggableId);
      const newColumn = {
        ...start,
        itemIds: newItemIds,
      };
      const newColumns = {
        ...columns,
        [columnKey]: newColumn,
      };
      this.setState({ columns: newColumns });
      if (onChange) {
        onChange(newColumns);
      }
      return;
    }
    const startColumnKey = keys[startItemIndex];
    const finishColumnKey = keys[finishItemIndex];
    const startItemIds = Array.from(start.itemIds);
    const finishItemIds = Array.from(finish.itemIds);
    startItemIds.splice(source.index, 1);
    const newStart = {
      ...start,
      itemIds: startItemIds,
    }
    finishItemIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      itemIds: finishItemIds,
    };
    const newColumns = {
      ...columns,
      [startColumnKey]: newStart,
      [finishColumnKey]: newFinish,
    };
    this.setState({ columns: newColumns });
    if (onChange) {
      onChange(newColumns);
    }
  }

  public render() {
    const { children, ...props } = this.props;
    return (
      <Wrapper {...props}>
        <DragDropContext onDragEnd={this.onDragEnd}>
          {this.renderColumns()}
        </DragDropContext>
      </Wrapper>
    );
  }

  private getItems = (itemIds: string[]): {id: string; title: string}[] => {
    return itemIds.map((item) => ({
      id: item,
      title: `Item o ID: ${item}`,
    }));
  }

  private renderColumns = (): JSX.Element[] => {
    const { columns } = this.props;
    const cols = Object.values(columns);
    return cols.map((item: any) => (
      <Column title={item.title} items={this.getItems(item.itemIds)} key={item.title} />
    ));
  }
}

export default Table;
