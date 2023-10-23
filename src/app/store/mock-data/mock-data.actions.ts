import { createAction, props } from "@ngrx/store";
import { MockData } from "../../models/mock-data.model";

export const loadDataAction = 
    createAction('[Mock-data MockData] LoadMockData');

export const loadDataActionSuccess = 
    createAction(
        '[Mock-data MockData] LoadMockData Completed', 
        props<{users: Array<MockData>}>()
    );