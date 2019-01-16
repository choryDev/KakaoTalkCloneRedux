import * as types from "./ActionTypes";

export function enterchat(chat, index, date) {
  return {
    type: types.ENTERCHAT,
    chat,
    index,
    date
  };
}
export function enteremail(data) {
  return {
    type: types.ENTEREMAIL,
    data
  };
}

export function changechatnum(num) {
  return {
    type: types.CHANGECHATNUM,
    num
  };
}
