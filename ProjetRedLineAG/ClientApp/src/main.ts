

import { HttpClientModule } from '@angular/common/http'
import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { provideRouter, withEnabledBlockingInitialNavigation } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app-routing.module';
import { provideAnimations } from '@angular/platform-browser/animations';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
    enableProdMode();
}
/*
platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err :any) => console.error(err));
*/
bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(HttpClientModule), 
        provideRouter(routes, withEnabledBlockingInitialNavigation()),
        provideAnimations() 
    ]
}).catch(err => console.error(err));