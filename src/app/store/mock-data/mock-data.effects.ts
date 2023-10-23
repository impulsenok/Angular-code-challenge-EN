import { Injectable, inject } from "@angular/core";
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { EMPTY, catchError, exhaustMap, map } from "rxjs";
import { MockDataService } from "src/app/services/mock-data/mock-data.service";
import { loadDataAction, loadDataActionSuccess } from "./mock-data.actions";

@Injectable()
export class MockDataEffects {

    private service = inject(MockDataService);

    constructor(private actions$: Actions) {}

    loadMockData$ = createEffect(() => this.actions$.pipe(
        ofType(loadDataAction),
        exhaustMap(() => this.service.getData()
          .pipe(
            map(users => (loadDataActionSuccess({ users })),
            catchError(() => EMPTY)
          ))
        )
    ))
}
