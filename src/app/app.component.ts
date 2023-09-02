import { Component, OnInit } from '@angular/core';
import { GenerateProbabilityService } from './services/generate-probability/generate-probability.service';

@Component({
	selector: 'root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public splashScreenVersion!: number

    constructor (private generateProbabiltyService: GenerateProbabilityService) {
        this.splashScreenVersion = generateProbabiltyService.getRandomNumber()

        console.log(this.splashScreenVersion)
    }
}
