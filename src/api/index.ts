import axios, {AxiosInstance, AxiosResponse} from 'axios';
import qs from 'qs';
import {GATEWAY_URL} from 'src/api/const';
import urljoin from 'url-join';

export default class Api {
  axios: AxiosInstance;

  constructor() {
    this.axios = axios.create();
    this.axios.defaults.baseURL = GATEWAY_URL;

    this.axios.interceptors.response.use(
      response => response,
      error => {
        return Promise.reject(new Error(error));
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
