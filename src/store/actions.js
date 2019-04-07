export const setId = ({commit}, id) => {
  id = Date.now() + Math.random();
  commit('SET_ID', id)
};

export const setDate = ({commit}, date) => {
  let currentDate = new Date();
  date = `${currentDate.toDateString()} ${currentDate.getHours()}:${currentDate.getMinutes()<10?'0':''}${currentDate.getMinutes()}`
  commit('SET_DATE', date)
};