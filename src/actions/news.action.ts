import { News } from './../app/models/news.model';
import { createAction, props } from "@ngrx/store";

export const getPaginate = createAction('[News] Get Paginate', props<{page: number, per_page: number}>());
export const getNewsSuccess = createAction('[News] Get News Success', props<{news: News[]}>());
export const getNewsFailure = createAction('[News] Get News Failure', props<{error: string}>());
