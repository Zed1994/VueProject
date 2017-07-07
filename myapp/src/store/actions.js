// actions are functions that causes side effects and can involve
// asynchronous operations.
export const actions = {
  savedata: ({ commit },{data}) => {
    console.log(data);
    commit('savedata',{data:data})
  },
  updataWaitingFlag:({ commit },flag) => {
    commit('updataWaitingFlag',{flag:flag})
  }
}