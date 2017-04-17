let nextId = 0;
export const AddTodo = (text) => ({
  type: 'ADD_TODO',
  text,
  id:nextId++
})
export const ToggleTodo = (id) =>({
  type:'TOGGLE_TODO',
  id
})

export const VisibilityFilter = (filter) => ({
  type: 'VISIBILITY_FILTER',
  filter
})