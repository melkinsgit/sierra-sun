import {connect} from 'react-redux';
import {updateParticipantList} from "../reducers/action-creators";
import {ParticipantHome} from "./participant-home";

const mapStateToProps = (state = []) => ({
    participantList: state.participantList,
    loading: state.loading
});

const mapDispatchToProps = (dispatch) => ({
    writeNewParticipantList: (participantList) => dispatch(updateParticipantList(participantList))
});

export default connect(mapStateToProps, mapDispatchToProps)(ParticipantHome);
