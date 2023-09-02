import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SplashLetterComponent } from './pages/splash-screens/splash-letter/splash-letter.component';
import { SplashBioComponent } from './pages/splash-screens/splash-bio/splash-bio/splash-bio.component';

@NgModule({
    declarations: [
        AppComponent,
        SplashLetterComponent,
        SplashBioComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
