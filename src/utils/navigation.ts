import { Dispatch } from 'react';
import { useDispatch } from 'react-redux';
import { navigate, ReactNavigationAction } from '../store/actions';
import { ApplicationAction } from '../store/actions/types';

export function useNavigation(
  dispatch?: Dispatch<ApplicationAction>
): (action: ReactNavigationAction) => void {
  const disp = typeof dispatch === 'undefined' ? useDispatch() : dispatch;
  return (action) => disp(navigate(action));
}
