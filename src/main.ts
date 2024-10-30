import { bootstrapApplication, provideClientHydration } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { provideMockStore } from '@ngrx/store/testing';
import { routes } from './app/app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideState, provideStore } from '@ngrx/store';
import { productsFeatureKey, productsReducer } from './app/products-list/store/reducers';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideEffects } from '@ngrx/effects';
import { isDevMode } from '@angular/core';
import { provideRouterStore } from '@ngrx/router-store';
import * as productsEffects from './app/products-list/store/effects';

bootstrapApplication(AppComponent,{ providers: [
  provideRouter(routes),
  provideClientHydration(),
  provideMockStore({}),
  provideHttpClient(withFetch()),
  provideStore(),
  provideState(productsFeatureKey,productsReducer),
  provideEffects(productsEffects),
  provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false,
      traceLimit: 75,
  }),
  provideEffects(productsEffects),
  provideRouterStore()
]},)
  .catch((err) => console.error(err));
