export const state = () => ({
  list: []
})

export const mutations = {
  fetchList(state, payload) {
    state.list = payload
  },
  // remove (state, todo) {
  //   state.list = state.list.filter(item => item.id !== todo.id)
  // },
}