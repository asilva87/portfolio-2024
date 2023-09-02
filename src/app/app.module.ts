import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { SplashLetterComponent } from './pages/splash-screens/splash-letter/splash-letter.component'
import { SplashBioComponent } from './pages/splash-screens/splash-bio/splash-bio/splash-bio.component'
import { TranslateLoader, TranslateModule } from '@ngx-translate/core'
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { TranslateHttpLoader } from '@ngx-translate/http-loader'

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
  }

@NgModule({
    declarations: [
        AppComponent,
        SplashLetterComponent,
        SplashBioComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        TranslateModule.forRoot({
            defaultLanguage: 'de',
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
