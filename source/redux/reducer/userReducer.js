const defaultUser = {
  id: 0,
  email: 0,
  admin: 0,
  active: 0,
  teacher: 0,
  rate: 0,
}
const userReducer = (state = defaultUser, action) => {
  switch (action.type) {
    case 'SET_USER':
      return { ...action.user };
    default:
      return state;
  }
};

export default userReducer;
