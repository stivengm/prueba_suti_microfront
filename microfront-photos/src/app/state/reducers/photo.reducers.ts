import { createReducer, on } from "@ngrx/store";
import { getItems, loadedItems } from "../actions/photo.actions";
import { ItemsState } from "src/app/core/models/item.state";

// export const initState: ReadonlyArray<PhotoInterface> = [];

export const initState: ItemsState = { loading: false, items: [] };

export const load = createReducer(
    initState,
    on(getItems, (state) => {
        return { ...state, loading: true }
    }),
    on(loadedItems, (state, {items}) => {
        return { ...state, loading: false, items }
    })
)
