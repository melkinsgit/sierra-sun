export const getParticipantList = async (event) => {

    const reader = new FileReader();
    reader.addEventListener("load", async (event) => {
        console.log('do we have a load event')
        const result = event.result;
        const participantList = result.split('\n');
        console.log(participantList);
        return participantList;
    });

};