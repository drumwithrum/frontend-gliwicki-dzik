import { State } from 'types/store/UiStore';
import { CallApiActionResponse } from 'store/middleware/api';

import types from './types';

const initialState: State = {
  columns: {
    monday: {
      title: 'Poniedziałek',
      itemIds: [
        '1',
        '2',
      ],
    },
    tuesday: {
      title: 'Wtorek',
      itemIds: [
        '3',
        '4',
      ],
    },
    wednesday: {
      title: 'Środa',
      itemIds: [
        '5',
        '6',
      ],
    },
    thursday: {
      title: 'Czwartek',
      itemIds: [],
    },
    friday: {
      title: 'Piątek',
      itemIds: [],
    },
    saturday: {
      title: 'Sobota',
      itemIds: [],
    },
    sunday: {
      title: 'Niedziela',
      itemIds: [],
    },
  },
};

export default (state = initialState, action: CallApiActionResponse) => {
  switch (action.type) {
    case types.UPDATE_TABLE_COLUMNS: {
      return {
        ...state,
        columns: action.payload,
      };
    }

    case types.ADD_TRAINING_TO_TABLE: {
      const { columns } = state;
      return {
        ...state,
        columns: {
          ...columns,
          monday: {
            ...columns.monday,
            itemIds: [
              ...columns.monday.itemIds,
              action.payload,
            ],
          },
        },
      };
    }

    default: return state;
  }
};
