import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { AnyAction, Dispatch } from 'redux';
import config from 'config';

export const CALL_API = 'CALL_API';

interface CallApiActionSettings<T> extends AxiosRequestConfig {
  endpoint: string;
  payload?: T;
}

export interface CallApiActionResponse {
  response?: any;
  payload?: any;
  type: string;
  apiAction?: ApiActionResult;
}

export interface CallApiAction<T> {
  [CALL_API]: CallApiActionSettings<T>;
}

export enum ApiActionResult {
  request = 'request',
  success = 'success',
  failure = 'failure',
}

const { API_URL } = config;

async function callApi(endpoint: string, settings: any, apiUrl = API_URL): Promise<AxiosResponse> {
  try {
    const isAuthenticated = Boolean(window.localStorage.getItem('gwdk-token'));
    if (!isAuthenticated) {
      // window.location.replace('/login');
    }
    const token = window.localStorage.getItem('gwdk-token') || null;
    const options = {
      ...settings,
      url: `${apiUrl}/${endpoint}`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios(options);
    return Promise.resolve(response);
  } catch (error) {
    const { status } = error.response;
    if (status === 401 || status === 403) {
      window.localStorage.removeItem('gwdk-token');
      // window.location.replace('/login');
    }

    return Promise.reject(error);
  }
}

export default () => (next: Dispatch) => async (action: AnyAction) => {
  const settings = action[CALL_API];

  if (typeof settings === 'undefined') {
    return next(action);
  }

  const {
    endpoint,
    types,
    payload,
    fileFormat,
    ...data
  } = settings;
  const [requestType, successType, errorType] = types;
  try {
    next({ payload, type: requestType, apiAction: ApiActionResult.request });

    const response = await callApi(endpoint, data);
    console.log('@N@L', response);
    return next({ response, payload, type: successType, apiAction: ApiActionResult.success });

  } catch (response) {
    next({ response, payload, type: errorType, apiAction: ApiActionResult.failure });
    return response;
  }
};
