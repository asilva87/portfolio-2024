import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GenerateProbabilityService {

    constructor() { }

    getRandomNumber(): number {
        return Math.floor(Math.random() * 2); // Generates either 0 or 1
    }
}
