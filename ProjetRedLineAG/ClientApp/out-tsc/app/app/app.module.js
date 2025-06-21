var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { ApiAuthorizationModule } from 'src/api-authorization/api-authorization.module';
import { AppRoutingModule } from './app-routing.module';
import { ApplicationManagerModule } from './applicationmanager/applicationmanager.module';
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent,
            NavMenuComponent,
        ],
        imports: [
            BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
            HttpClientModule,
            FormsModule,
            ApiAuthorizationModule,
            AppRoutingModule,
            ApplicationManagerModule
        ],
        providers: [
            {
                provide: 'BASE_URL',
                useFactory: () => document.getElementsByTagName('base')[0].href
            }
        ],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map