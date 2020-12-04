import React, { useState } from 'react';
import tripReport from './../sierra_sun_20446';

export const ShowFile = () => {
    console.log(tripReport)
    return (
        <div>
            {tripReport.participant}
            {Object.keys(tripReport).forEach(key => {console.log(key)})}
            <input type="text" id="participant" name="participant" value={tripReport.participant} />
            <input type="text" id="firstName" name="firstName" value={tripReport.firstName} />
            <input type="text" id="lastName" name="lastName" value={tripReport.lastName} />
            <input type="text" id="memberNumber" name="memberNumber" value={tripReport.memberNumber} />
        </div>
    )};
