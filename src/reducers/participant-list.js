import {UPDATE_PARTICIPANT_LIST} from "../constants";

const participantList = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_PARTICIPANT_LIST:
            return {
                ...state,
                participantList: action.payload.participantList
            };
        default:
            return state
    }
};

export default participantList