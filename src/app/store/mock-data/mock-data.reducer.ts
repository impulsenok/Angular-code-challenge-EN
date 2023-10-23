import { createReducer, on } from "@ngrx/store";
import { loadDataActionSuccess } from "./mock-data.actions";

import { StoreMockData } from "./mock-data-store.models";
import { MockData } from "src/app/models/mock-data.model";

const initialState: StoreMockData = { data: [] };

export const MockDataReducer = createReducer(
    initialState,
    on(loadDataActionSuccess, (state: StoreMockData, data: {users: Array<MockData>}) => (
        {
            ...state,
            data: data.users,
        }
    )) 
)