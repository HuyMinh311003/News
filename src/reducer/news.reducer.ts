import { createReducer, on } from "@ngrx/store";
import { NewsState } from "src/states/news.state";
import * as NewsActions from "../actions/news.action";

const initialState: NewsState = {
  news: [],
  numOfNews: 0,
  loading: false,
  error: '',
  isSuccess: true,
}

export const newsReducer = createReducer(
  initialState,
  on(NewsActions.getPaginate, (state) => {
    return {...state};
  }),
  on(NewsActions.getNewsSuccess, (state, action) => {
    return {...state, news: action.news, loading: false};
  }),
  on(NewsActions.getNewsFailure, (state, action) => {
    return{...state, error: action.error, loading: false, isSuccess: false};
  })
)
