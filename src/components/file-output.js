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

                const result = lines.filter(line => {
                    const [positions, letter, password] = line.split(' ');
                    const string2 = letter && letter.slice(0, 1);
                    const [minCt, maxCt] = positions && positions.split('-')
                    if (minCt && maxCt) {
                        const isAtPositionOne = password.charAt(minCt-1) === letter.charAt(0);
                        const isAtPositionTwo = password.charAt(maxCt-1) === letter.charAt(0);
                        console.log('password', password, '11111', isAtPositionOne, '222222', isAtPositionTwo)
                        const isAtOneNotTwo = isAtPositionOne && !isAtPositionTwo;
                        const isAtTwoNotOne = !isAtPositionOne && isAtPositionTwo;
                        return isAtOneNotTwo || isAtTwoNotOne;
                        // const regex = new RegExp(string2, 'g');
                        // const letterCount = password.match(regex) && password.match(regex).length;
                        // const countInRange = letterCount && letterCount >= minCt && letterCount <= maxCt
                        // return countInRange
                    }
                })
                console.log('result===>', result.length)





            }
            reader.readAsText(file);
            const textFile = /text.*/;












            // return data;

            // if (file.type.match(textFile)) {
            //     console.log('it was a text file before read onload')
            //     reader.onload = function (event) {
            //         preview.innerHTML = event.target.result;
            //     }
            //     console.log('it was a text file after read onload')
            // } else {
            //     preview.innerHTML = "<span class='error'>It doesn't seem to be a text file!</span>";
            // }
            // reader.readAsText(file);
            // console.log(reader)


            // var fr = new FileReader();
            // fr.onload = function(e) {
            //     // e.target.result should contain the text
            // };
            // fr.readAsText(file);

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
