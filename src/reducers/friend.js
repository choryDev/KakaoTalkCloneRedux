import * as types from "../actions/ActionTypes";
import { Map, List } from "immutable";

const initialState = Map({
  friends: List([
    Map({
      name: "철수",
      idx: 0,
      message: "반갑다",
      picture: "http://mblogthumb1.phinf.naver.net/MjAxNzA2MzBfMjk0/MDAxNDk4NzUzNDU1OTk1.LoYKnjr3DxB1wTjWCVPl0w-_PC5VzVVwYhOUhBfUKb8g._zJclG_GdJ8vLL3gbCwq0TM3D43Xbc5TaA4W5VAmZfAg.JPEG.ryokofan90/%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%93%9C2.JPG?type=w2",
      chatList: List([
        Map({ who: "me", content: "밥뭇나", date: "03:12" }),
        Map({ who: "철수", content: "국밥", date: "04:12" }),
        Map({ who: "me", content: "마지막께톡", date: "05:12" })
      ])
    }),
    Map({
      name: "도라에몽",
      idx: 1,
      message: "배고프다",
      picture: "https://post-phinf.pstatic.net/MjAxODAzMDJfMzEg/MDAxNTE5OTgxNDc2Mjc0.mOdNK5C5tXWbvPQnpT1GMuuakTlHqjLd6Bv6Q89YgR0g.f4hyOTR3M3gp32JB-qTztz9NCvy3z_3zKCu7WeZBUfEg.PNG/6.PNG?type=w1200",
      chatList: List([
        Map({ who: "me", content: "밥뭇나", date: "03:12" }),
        Map({ who: "도라에몽", content: "국밥", date: "04:12" }),
        Map({ who: "도라에몽", content: "마지막께톡", date: "05:12" }),
        Map({ who: "me", content: "빵", date: "05:12" }),
        Map({ who: "me", content: "진구야!!", date: "19:12" })
      ])
    }),
    Map({
      name: "짱구",
      idx: 2,
      message: "ㅋㅋㅋ",
      picture: "https://vignette.wikia.nocookie.net/crayonshinchan/images/f/fe/01.png/revision/latest?cb=20180603064011&path-prefix=ko",
      chatList: List([
      ])
    }),
  ]),
});

function friend(state = initialState, action) {
  switch (action.type) {
    case types.ENTERCHAT:
      return state.updateIn(['friends', action.index, 'chatList'],
        chatlist => chatlist.push(new Map({
          who: "me",
          content: action.chat,
          date: action.date
        })))
    default:
      return state;
  }
}

export default friend;