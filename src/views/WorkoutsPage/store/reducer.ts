import types from './types';
import { CallApiActionResponse } from 'store/middleware/api';

const initialState: any = {
  examples: [],
};

export default (state = initialState, action: CallApiActionResponse) => {
  switch (action.type) {
    case types.EXAMPLE_TYPE: return {
      ...state,
      examples: ['example'],
    };

    default: return state;
  }
};
