import React from 'react';

export const FileImport = () => {

    const onChangeHandler = event => {
        const tripReport = event.target.files[0];
        console.log(tripReport.name);
        const reader = new FileReader();
        reader.addEventListener("load", function(event) {
            const textFile = event.target;
            const result = textFile.result;
            console.log(result.split('\n'))
        });
        reader.readAsText(tripReport);
    };

    return (
        <div className={'file-import'}>
            <input type="file" name="file" onChange={onChangeHandler}/>
        </div>
    )
};