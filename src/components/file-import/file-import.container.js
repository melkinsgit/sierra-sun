import {connect} from 'react-redux';
import { FileImport } from "./file-import";
import {updateParticipantList} from "../../reducers/action-creators";

const mapStateToProps = (state = []) => ({
    participantList: state.participantList
});

const mapDispatchToProps = (dispatch) => ({
    writeNewParticipantList: (participantList) => dispatch(updateParticipantList(participantList))
});

export default connect(mapStateToProps, mapDispatchToProps)(FileImport);