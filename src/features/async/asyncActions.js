import {
  ASYNC_ACTION_START,
  ASYNC_ACTION_FINSIH,
  ASYNC_ACTION_ERROR
} from './asyncConstants';

export const asyncActionStart = () => {
  return {
    type: ASYNC_ACTION_START
  };
};

export const asyncActionFinish = () => {
  return {
    type: ASYNC_ACTION_FINSIH
  };
};

export const asyncActionError = () => {
  return {
    type: ASYNC_ACTION_ERROR
  };
};
