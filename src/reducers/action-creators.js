import {UPDATE_PARTICIPANT_LIST} from "../constants";

export const updateParticipantList = (participantList) => ({
    type: UPDATE_PARTICIPANT_LIST,
    payload: {
        participantList
    }
});