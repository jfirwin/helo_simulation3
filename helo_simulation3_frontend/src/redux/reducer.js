//TYPES
const UPDATE_CURRENT_USER = 'UPDATE_CURRENT_USER';
const UPDATE_CURRENT_USER_FROM_AXIOS = 'UPDATE_CURRENT_USER_FROM_AXIOS';

// ACTIONS
export function updateCurrentUser(updatedUser) {
  return {
    type: UPDATE_CURRENT_USER,
    payload: updatedUser
  }
}

// REDUCER
export default function reducer(state, action) {
  switch(action.type) {
    case UPDATE_CURRENT_USER:
      return Object.assign({}, state, {
        currentUser: action.payload
      })
    case UPDATE_CURRENT_USER_FROM_AXIOS:
      return Object.assign({}, state, {
        currentUser: {
          firstName: action.payload.firstname,
          lastName: action.payload.lastname,
          gender: action.payload.gender,
          hairColor: action.payload.hair,
          eyeColor: action.payload.eye,
          hobby: action.payload.hobby,
          birthDay: action.payload.birthday,
          birthMonth: action.payload.birthmonth,
          birthYear: action.payload.birthyear,
        }
      })
    default:
      return state
  }
}
