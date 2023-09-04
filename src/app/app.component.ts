import { Component, OnInit } from '@angular/core';
import { GenerateProbabilityService } from './services/generate-probability/generate-probability.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
    public splashScreenVersion!: number

    constructor (private generateProbabiltyService: GenerateProbabilityService, private translateService: TranslateService) { }

    ngOnInit(): void {
        this.splashScreenVersion = this.generateProbabiltyService.getRandomNumber(2)

        // Tells the service which languages are available to use for translations.
        this.translateService.addLangs(['en', 'de', 'ru'])
        // Specify a fallback set of translations to use in case there are missing translations for the current language.
        this.translateService.setDefaultLang('de')
        // Tells the service which is the current language to use for translations.
        this.translateService.use('en')
    }
}
