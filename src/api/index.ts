import axios, {AxiosError, AxiosInstance, AxiosResponse} from 'axios';
import qs from 'qs';
import {GATEWAY_URL} from 'src/api/const';
import urljoin from 'url-join';
import {
  APIErrorDetails,
  APIErrorPayload,
  CustomAxiosRequestConfig,
} from './types';

export class APIError extends Error {
  details: APIErrorDetails;
  status: number;
  code?: number;
  originalError: AxiosError<APIErrorPayload>;
  config?: CustomAxiosRequestConfig;

  constructor(error: AxiosError<APIErrorPayload>) {
    if (!error.response || !error.response.data) {
      super(error.message);
      this.details = {};
      this.status = 0;
    } else {
      const {details, message}: APIErrorPayload = error.response!.data;
      super(message || error.message);
      this.details = details || {};
      this.status = error.response!.status;
    }

    this.originalError = error;
  }
}

export default class Api {
  axios: AxiosInstance;

  constructor() {
    this.axios = axios.create();
    this.axios.defaults.baseURL = GATEWAY_URL;

    this.axios.interceptors.response.use(
      response => response,
      error => {
        return Promise.reject(new APIError(error));
      },
    );
  }

  get<T>(uri: string, query?: object): Promise<AxiosResponse<T>> {
    return this.axios.get<T>(urljoin(uri, stringifyQuery(query)));
  }
}

function stringifyQuery(object = {}) {
  return qs.stringify(object, {
    arrayFormat: 'repeat',
    addQueryPrefix: true,
  });
}
