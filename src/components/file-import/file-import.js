import React from 'react';
import {getParticipantList} from "./file-import-helper";

export const FileImport = (props) => {
    console.log('props in file import', props)

    const onChangeHandler = event => {
        const tripReport = event.target.files[0];
        console.log(tripReport.name);
        const reader = new FileReader();
        reader.addEventListener("load", function(event) {
            const textFile = event.target;
            const result = textFile.result;
            const participantList = result.split('\n');
            console.log(participantList);
            props.writeNewParticipantList(participantList);
        });
        reader.readAsText(tripReport);
    };

    return (
        <div className={'file-import'}>
            <input type="file" name="file" onChange={onChangeHandler}/>
        </div>
    )
};