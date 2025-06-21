import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { provideServerRendering } from '@angular/platform-server';

@NgModule({
    imports: [AppModule, ServerModule],    
    providers: [provideServerRendering()]
})
export class AppServerModule { }
