import * as types from "../actions/ActionTypes";
import { Map, List } from "immutable";

const initialState = Map({
  chatNumber: 0,
  me: Map({
    name: "장현철",
    message: "어서와 여긴 처음이지?",
    picture: "https://avatars0.githubusercontent.com/u/36058455?s=460&v=4",
    email: "j28329637@gmail.com"
  }),
});

function me(state = initialState, action) {
  switch (action.type) {
    case types.ENTEREMAIL:
      return state.update('me',
        email => email.set('email', action.data)
      )
    case types.CHANGECHATNUM:
      return state.set('chatNumber', action.num)
    default:
      return state;
  }
}

export default me;