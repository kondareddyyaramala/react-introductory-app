import React, { Fragment } from 'react';

export function UserDetails(props) {
    return (
        <Fragment>
            <div>{props.name}</div>
        </Fragment>
    )
}