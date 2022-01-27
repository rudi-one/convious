import * as React from 'react';
import {memo} from 'react';
import {Snackbar as SnackbarPaper} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {resetSnackbar} from 'store/ui/snackbar/actions';
import {selectSnackbarMessage} from 'store/ui/snackbar/selectors';

const SnackbarComponent = () => {
  const dispatch = useDispatch();
  const message = useSelector(selectSnackbarMessage);

  const onDismissSnackBar = () => {
    return dispatch(resetSnackbar());
  };

  return (
    <SnackbarPaper
      visible={!!message}
      onDismiss={onDismissSnackBar}
      action={{
        label: 'Close',
        onPress: () => onDismissSnackBar(),
      }}>
      {message}
    </SnackbarPaper>
  );
};

export const Snackbar = memo(SnackbarComponent);
