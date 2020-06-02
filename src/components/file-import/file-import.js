import React, {useState} from 'react';
import {getParticipantList} from "./file-import-helper";
import FileImportContainer from "../../participant-home/participant-home.container";
import {ParticipantHome} from "../../participant-home/participant-home";
// import {updateParticipantList} from "../../reducers/action-creators";

export const FileImport = (props) => {
    console.log('props in file import', props)

    const [ loading, setLoading ] = useState(false, [])
    const [ participantList, setParticipantList ] = useState ([], [])

    const onChangeHandler = event => {
        const tripReport = event.target.files[0];
        console.log(tripReport.name);
        const reader = new FileReader();
        console.log('reader', reader)
        let participantList;
        reader.addEventListener("load", function(event) {
            console.log('event fired')
            setLoading(true);
            const textFile = event.target;
            const result = textFile.result;
            participantList = result.split('\n');
            console.log(participantList)
            setParticipantList(participantList)
            // dispatch(updateParticipantList(this.participantList));
            setLoading(false);
        });
        console.log('what do we have after event', loading, participantList)
        reader.readAsText(tripReport);
    };

    return (
        <form>
            <input
                type="file"
                name="file"
                onChange={() => onChangeHandler()}
            />
        </form>
    );

    // return (
    //     <div>
    //         { loading & <div className={'file-import'}>
    //             <input type="file" name="file" onChange={onChangeHandler}/>
    //             <div>{props.participantList}</div>
    //         </div> }
    //     </div>
    // )
};