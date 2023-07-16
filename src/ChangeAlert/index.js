import React from "react";
//import { WrappedChangedStorage } from "./WrappedChangedStorage";

function ChangeAlert(props) {
    return(
        props.showAlert ? (
            <p>Cambio en el storage</p>
        ) : (
            null
        )
    );
}

export const changeStorageNotification = WrappedChangedStorage(ChangeAlert);

export {ChangeAlert};