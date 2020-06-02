import React from 'react';
import ReactDOM from 'react-dom';
import { FormControl } from '@material-ui/core';
import { Input } from '@material-ui/core';
import { TextField } from '@material-ui/core';

export const ParticipantHome = ({participantList}) => {
    console.log('in participant home', participantList)
    return (
        <form>
            <TextField required id="first" label="Required" defaultValue={participantList[0]} />
            <TextField required id="last" label="Required" defaultValue="last name" />
            <TextField required id="email" label="Required" type="email" defaultValue="email" />
            <TextField required id="address" label="Required" defaultValue="address" />
            <TextField required id="mobile" label="Required" defaultValue="mobile phone number" />
            <TextField required id="standard-required" label="Required" defaultValue="Hello World" />
            <TextField required id="standard-required" label="Required" defaultValue="Hello World" />
            <TextField required id="standard-required" label="Required" defaultValue="Hello World" />
            <TextField required id="standard-required" label="Required" defaultValue="Hello World" />
            <TextField required id="standard-required" label="Required" defaultValue="Hello World" />
        </form>
    )
}