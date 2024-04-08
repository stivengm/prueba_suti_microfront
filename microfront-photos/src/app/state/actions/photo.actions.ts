import { createAction, props } from "@ngrx/store";
import { PhotoInterface } from '../../core/models/photo.interface';

export const getItems = createAction(
    '[GetItems] Get items from service',
);

export const loadedItems = createAction(
    '[GetItemsSuccess] Loaded success',
    props<{ items: PhotoInterface[] }>()
)