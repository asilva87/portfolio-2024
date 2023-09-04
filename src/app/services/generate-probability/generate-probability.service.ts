import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GenerateProbabilityService {

    constructor() { }

    getRandomNumber(max: number, min?: number): number {
        if (!min) {
            return Math.floor(Math.random() * max)
        } else {
            return Math.floor(Math.random() * (max - min + 1) + min)
        }
    }
}
