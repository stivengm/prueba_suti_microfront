import { ActionReducerMap } from "@ngrx/store";
import { ItemsState } from "../core/models/item.state";
import { load } from "./reducers/photo.reducers";

export interface AppState {
    itemsPhotos: ItemsState
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    itemsPhotos: load
}