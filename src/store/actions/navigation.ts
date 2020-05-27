import { ActionType, ApplicationAction } from './types';
import {
  NavigationAction,
  NavigationStackAction,
  NavigationDrawerAction,
} from 'react-navigation';

export type ReactNavigationAction =
  | NavigationAction
  | NavigationStackAction
  | NavigationDrawerAction;
export interface Navigate extends ApplicationAction {
  type: ActionType.NAVIGATE;
  action: ReactNavigationAction;
}

export const navigate = (action: ReactNavigationAction): Navigate => ({
  type: ActionType.NAVIGATE,
  action,
});

export type NavigationActionType = Navigate;
