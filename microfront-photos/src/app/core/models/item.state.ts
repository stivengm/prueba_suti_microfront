import { PhotoInterface } from "./photo.interface";

export interface ItemsState {
    loading: boolean,
    items: ReadonlyArray<PhotoInterface>
}