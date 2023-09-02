import { Component } from '@angular/core';
import { GenerateProbabilityService } from './services/generate-probability/generate-probability.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public splashScreenVersion!: number

    constructor (private generateProbabiltyService: GenerateProbabilityService, private translateService: TranslateService) {
        this.splashScreenVersion = generateProbabiltyService.getRandomNumber()

        // Tells the service which languages are available to use for translations.
        translateService.addLangs(['en', 'de', 'ru'])
        // Specify a fallback set of translations to use in case there are missing translations for the current language.
        translateService.setDefaultLang('en')
        // Tells the service which is the current language to use for translations.
        translateService.use('de')
    }
}
