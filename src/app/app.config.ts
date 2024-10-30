import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideMockStore } from '@ngrx/store/testing';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideState, provideStore } from '@ngrx/store';
import * as productsEffects from './products-list/store/effects';
import { provideEffects } from '@ngrx/effects';
import { provideRouterStore } from '@ngrx/router-store';
import { productsFeatureKey, productsReducer } from './products-list/store/reducers';
import { provideStoreDevtools } from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideMockStore({}),
    provideHttpClient(withFetch()),
   
  ],
};
