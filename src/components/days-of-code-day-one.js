import React from 'react';
import { puzzleInputDayOne } from './puzzleInputDayOne'

export const DaysOfCodeDayOne = () => {
    let count = 0;
    const getAnswer = (testInput) => {
        testInput.forEach(currentAmount => {
            testInput.filter(nextAmount => {
                // console.log(currentAmount, nextAmount)
                // count++
                if (currentAmount + nextAmount < 2020 || count >= testInput.length) {
                    testInput.filter(thirdAmount => {
                        if (currentAmount + nextAmount + thirdAmount === 2020)
                        console.log(currentAmount, nextAmount, thirdAmount)
                        return currentAmount * nextAmount
                    })
                }
            })
        })
    }
    const theSolution = getAnswer(puzzleInputDayOne)
    console.log(theSolution)









    // console.log(puzzleInputDayOne)
    // let counter = 0;
    // const solveThePuzzle = (puzzleInput) => {
    //     let solution;
    //     let currentAmount = puzzleInput[0];
    //     let nextAmount = puzzleInput[1+counter];
    //     let currentSum = currentAmount + nextAmount;
    //
    //     console.log('puzzleinput is', puzzleInput, currentAmount, '+', nextAmount, '=', currentSum)
    //
    //     if(currentSum === 50 || puzzleInput.length === 2) {
    //         console.log('current sum is 50 or we are out of space')
    //         solution = currentAmount*nextAmount
    //     } else {
    //         console.log('current sum is NOT 50')
    //         counter++;
    //         solveThePuzzle(puzzleInput)
    //     }
    //     return solution;
    // };

    return (
        <div>just stuff {theSolution}</div>
    )
}