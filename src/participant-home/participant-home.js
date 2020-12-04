import React from 'react';
import ReactDOM from 'react-dom';
import { FormControl } from '@material-ui/core';
import { Input } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import tripReport from './../sierra_sun_20446';

export const ParticipantHome = ({participantList}) => {
    console.log('in participant home', participantList)
    const { firstName, lastName, address1, address2, city, state, zip, memberNumber, email, mobile } = tripReport;
    return (
        <form>
            <TextField required id="first" label="Required" defaultValue="First Name" value={firstName} />
            <TextField required id="last" label="Required" defaultValue="Last Name" value={lastName} />
            <TextField required id="email" label="Required" type="email" defaultValue="Email Address" value={email} />
            <TextField required id="address1" label="Required" defaultVavlue="Address Line 1" value={address1} />
            <TextField required id="address2" label="Required" defaultValue="Address Line 2" value={address2} />
            <TextField required id="city" label="Required" defaultValue="City" value={city} />
            <TextField required id="state" label="Required" defaultValue="State" value={state} />
            <TextField required id="mobile" label="Required" defaultValue="Mobile Phone Number" value={mobile}/>
            <TextField required id="another-pro" label="Required" defaultValue="Another Prop" />
        </form>
    )
};
