/*
 * action types
 */

export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

/*
 * other constants
 */

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/*
 * action creators
 */

let nexttodo=0;
export function addTodo(text: string) {
    return { type: ADD_TODO, text, id: nexttodo++ }
}

export function toggleTodo(index: number) {
  return { type: TOGGLE_TODO, index }
}

export function setVisibilityFilter(filter: any) {
  return { type: SET_VISIBILITY_FILTER, filter }
}

export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT'

export function selectSubreddit(subreddit:any) {
  return {
    type: SELECT_SUBREDDIT,
    subreddit
  }
}
export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT'

export function invalidateSubreddit(subreddit:any) {
  return {
    type: INVALIDATE_SUBREDDIT,
    subreddit
  }
}