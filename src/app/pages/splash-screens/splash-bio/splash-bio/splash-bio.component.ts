import { Component, OnInit } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'
import { GenerateProbabilityService } from 'src/app/services/generate-probability/generate-probability.service'

@Component({
    selector: 'splash-bio',
    templateUrl: './splash-bio.component.html',
    styleUrls: ['./splash-bio.component.scss'],
})
export class SplashBioComponent implements OnInit {
    public bio: string[]= []
    public bioLength = 0
    public rows = 0
    public bioMatrix: string[][] = []

    constructor(
        private translateService: TranslateService,
        private generateProbabilityService: GenerateProbabilityService
    ) { }

    ngOnInit(): void {
        this.translateService.get('bio').subscribe((translation: string) => {
            let arr = []
            const randomLength = this.generateProbabilityService.getRandomNumber(8, 4)

            // Create arrays of letters of random lengths and push to the 2D array.
            // Random lenghts, so that there is space left for the fillers.
            for (let i = 0; i < translation.length; i++) {
                if ((i + 1) % randomLength !== 0) {
                    arr.push(translation[i])
                } else {
                    arr.push(translation[i]) // Push the character at i.
                    this.bioMatrix.push(arr)
                    arr = []
                }
            }

            // Push any remaining characters.
            if (arr.length > 0) {
                this.bioMatrix.push(arr)
            }

            // Insert fillers in subarrays.
            this.bioMatrix = this.insertFillersInBioMatrix(this.bioMatrix)

            this.bio = this.bioMatrix.flat()
        })
    }

    insertFillersInBioMatrix(bioMatrix: string[][]): string[][] {
        const newBioMatrix: string[][] = [];
    
        // For each subarray in bioMatrix[][]
        for (let i = 0; i < bioMatrix.length; i++) {
            let fillersAmount: number;
            // Repeat until the fillers amount is larger than 0.
            do {
                fillersAmount = this.generateProbabilityService.getRandomNumber(4);
            } while (fillersAmount === 0);
    
            let indexToInsertFiller = this.generateProbabilityService.getRandomNumber(6);
            let newRow: string[] = this.insertFillersInRow(bioMatrix[i], fillersAmount, indexToInsertFiller);
    
            // Ensure the newRow doesn't exceed a length of 8.
            if (newRow.length > 8) {
                newRow = newRow.slice(0, 8); // Truncate the newRow to a length of 8.
            }
    
            // If it's the first array, simply push it.
            if (i === 0) {
                newBioMatrix.push(newRow);
            } else {
                // Check if the current row has at least 8 elements for meaningful median comparison.
                if (bioMatrix[i].length === 8) {
                    while (this.areFillerIndexMediansSimilar(
                        this.calcFillerIndexMedian(newBioMatrix[i - 1]),
                        this.calcFillerIndexMedian(newRow)
                    )) {
                        fillersAmount = this.generateProbabilityService.getRandomNumber(4);
                        indexToInsertFiller = this.generateProbabilityService.getRandomNumber(6);
                        newRow = this.insertFillersInRow(bioMatrix[i], fillersAmount, indexToInsertFiller);
                        // Ensure the newRow doesn't exceed a length of 8.
                        if (newRow.length > 8) {
                            newRow = newRow.slice(0, 8); // Truncate the newRow to a length of 8.
                        }
                    }
                }
                newBioMatrix.push(newRow);
            }
        }
    
        return newBioMatrix;
    }
    

    insertFillersInRow(row: string[], fillersAmount: number, indexToInsertFiller: number): string[] {
        const newRow = [...row]
        console.log('row length', newRow.length)
        console.log('oldRow', newRow)

        for (let i = 0; i < fillersAmount; i++) {
            newRow.splice(indexToInsertFiller, 0, '▨')
        }

        console.log('newRow', newRow)

        return newRow
    }

    // Calculate the median of the indices of where the "X" appear in the array.
    calcFillerIndexMedian(bioRow: string[]): number {
        const fillerPositions = []

        for (let i = 0; i < bioRow.length; i++) {
            if (bioRow[i] === '▨') {
                fillerPositions.push(i)
            }
        }

        return fillerPositions.reduce((prev, cur) => prev + cur, 0) / fillerPositions.length
    }

    // Compare two medians of a row and its predecessor. If both are similar, it means
    // they will eventually produce a "tower" of fillers. To make the fillers appear more
    // dinamically, the result is used to get a new row with differently places "X".
    areFillerIndexMediansSimilar(med1: number, med2: number): boolean {
        const difference = Math.abs(med1 - med2)

        // Are the medians within the range of -1 and +1 of one another?
        return difference >= 1
    }
}
