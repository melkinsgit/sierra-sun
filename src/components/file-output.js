import React from 'react';
import {DaysOfCodeDayTwo} from "./days-of-code-day-two";

export const FileOutput = (props) => {

    const getPuzzleFile = () => {
        if (window.File && window.FileReader && window.FileList && window.Blob) {
            let data
            const preview = document.getElementById('show-text');
            const file = document.querySelector('input[type=file]').files[0];
            // const file = getMyFile();
            const reader = new FileReader()
            reader.onload = function (e) {
                data = e.target.result
                const lines = data.split('\n')

                const linesInFile = lines.length;
                const aFewLines = lines.slice(0, 15)
                const linesInAFewLines = aFewLines.length;
                // console.log(aFewLines)
                const theBigTwoByTwo = lines.map(line => line.split(''));
                const twoByTwo = aFewLines.map(line => line.split(''));
                // console.log(twoByTwo)
                let treeCount = 0;

                const testString =
                    ".......#................#......\n" +
                    "...#T#.....#.##.....#..#.......\n" +
                    "..#..#.T......#.#.#............\n" +
                    "....#...#.T..#.....#..#.....#..\n" +
                    "....#.......#T##......#...#..#.\n";
                const rows = testString.split('\n')
                const testTwoByTwo = rows.map(line => line.split(''));
                console.log(testTwoByTwo)




                theBigTwoByTwo.forEach((line, lineIdx) => {
                    console.log('got a new line')
                    // console.log('the line is', line)
                    if (lineIdx > 0) {
                        console.log('what is the counter', lineIdx * 3 + 1)
                        const square = line[(lineIdx * 3 + 1) % 30];
                        console.log('square is ==>', square)
                        if (square === '#') {
                            console.log('got the Tree')
                            treeCount++;
                        }
                        // console.log('the indexed element of line', line, 'and index', stepIdx, '===>', line[(1 + stepIdx) *3])
                    }


                    //         line.forEach((step, stepIdx) => {
                    //         if(stepIdx % 3 === 0 && stepIdx !== 0) {
                    //             const square = line[(1 + stepIdx) * 3];
                    //             console.log('at', lineIdx, ',', stepIdx, 'square is ==>', square)
                    //             if (square === '#') {
                    //                 treeCount++;
                    //             }
                    //             // console.log('the indexed element of line', line, 'and index', stepIdx, '===>', line[(1 + stepIdx) *3])
                    //         }
                    //     })
                    // }
                })
                console.log(treeCount)




            }
            reader.readAsText(file);
            const textFile = /text.*/;


        } else {
            alert("Your browser is too old to support HTML5 File API");
        }
    }

    return (
        <div className={'file-output'}>
            <input type="file" onChange={getPuzzleFile} />
            <div id="show-text">Choose text File</div>
        </div>
    );
}
