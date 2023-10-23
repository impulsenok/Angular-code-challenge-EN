import { createSelector } from "@ngrx/store";
import { StoreMockData } from "./mock-data-store.models";

export const selectorMockData = createSelector(
    (state: {mockData: StoreMockData}) => state.mockData,
    (state) => state
)