/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from '@reduxjs/toolkit'
import { all, fork } from 'redux-saga/effects'
import { InjectedReducersType } from 'utils/types/injector-typings'
import { reducer as Common } from './common/slice'

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export function createReducer(injectedReducers: InjectedReducersType = {}) {
  // Initially we don't have any injectedReducers, so returning identity function to avoid the error

  return combineReducers({
    Common,
    ...injectedReducers,
  })
}
export function* rootSaga() {
  yield all([
   
  ])
}
