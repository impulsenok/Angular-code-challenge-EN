import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './component/app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RouterModule } from '@angular/router';
import { ROUTES } from './routes';
import { MockDataReducer } from 'src/app/store/mock-data/mock-data.reducer';
import { MockDataEffects } from 'src/app/store/mock-data/mock-data.effects';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    StoreModule.forRoot({mockData: MockDataReducer}),
    EffectsModule.forRoot([MockDataEffects])
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
