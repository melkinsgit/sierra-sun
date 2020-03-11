import React from 'react';

export const ShowFile = () => {

    const onChangeHandler = event => {
        const tripReport = event.target.files[0];
        console.log(tripReport.name);
        const reader = new FileReader();
        reader.addEventListener("load", function(event) {
            const textFile = event.target;
            const result = textFile.result;
        });
        reader.readAsText(tripReport);
    };

    return (
        <div className={'file-import'}>
            <input type="file" name="file" onChange={onChangeHandler}/>
        </div>
    )
};