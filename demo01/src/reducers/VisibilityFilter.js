export const VisibilityFilter = (state='SHOW_ALL',action) => {
  switch (action.type) {
    case 'VISIBILITY_FILTER':
    return action.filter
    default:
    return state
  }
}