import React from 'react';

export const FileOutput = (props) => {

    const showFile = () => {
        if (window.File && window.FileReader && window.FileList && window.Blob) {
            const preview = document.getElementById('show-text');
            const file = document.querySelector('input[type=file]').files[0];
            // const file = getMyFile();
            const reader = new FileReader()

            const textFile = /text.*/;

            if (file.type.match(textFile)) {
                reader.onload = function (event) {
                    preview.innerHTML = event.target.result;
                }
            } else {
                preview.innerHTML = "<span class='error'>It doesn't seem to be a text file!</span>";
            }
            reader.readAsText(file);

        } else {
            alert("Your browser is too old to support HTML5 File API");
        }
    }

    return (
        <div className={'file-output'}>
            <input type="file" onChange={showFile} />
            <div id="show-text">Choose text File</div>
        </div>
    );
}