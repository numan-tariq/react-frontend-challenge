import { RMV, ADD } from "../actions/types";

const initialState = {
  urls: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD:
      return { ...state, urls: [...state.urls, action.payload] };
    case RMV:
      return { ...state, urls: state.urls.filter(url => url !== action.payload) };
    default:
      return state;
  }
}
