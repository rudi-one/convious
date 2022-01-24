import {AxiosRequestConfig} from 'axios';
import Api, {APIError} from '.';

export type ApiType = Api;
export type ApiErrorType = APIError;

export interface APIErrorPayload {
  message: string;
  details?: APIErrorDetails;
}

export interface APIErrorDetails {
  [key: string]: string;
}

export interface CustomAxiosRequestConfig extends AxiosRequestConfig {
  hasRefreshedToken?: boolean;
}

export type EndpointTypes = 'smart-tube-events' | 'checkins' | 'order-comments';
