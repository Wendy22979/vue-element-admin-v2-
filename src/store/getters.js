const getters = {
  userInfo:(state)=>state.user.userInfo,
  removeRoute:(state)=>state.user.removeRoute,
  token:(state)=>state.user.token,
  sidebar:(state)=>state.app.sidebar
}
export default getters
