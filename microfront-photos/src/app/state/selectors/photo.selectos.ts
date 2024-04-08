import { FeatureSlice, createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { ItemsState } from "src/app/core/models/item.state";

export const selectItemsPhotoFeature = (state: AppState) => state.itemsPhotos;

export const selectListItemsPhoto = createSelector(
    selectItemsPhotoFeature,
    (state: ItemsState) => state.items
)