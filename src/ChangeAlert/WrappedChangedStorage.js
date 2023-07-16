import React from "react";
//import { ChangeAlert } from ".";

function WrappedChangedStorage(ChangeAlert) {
    const [changed, setChanged] = React.useState(false);

    window.addEventListener('storage', (change)=>{
        if(change.key === 'TODOS_V1'){
            setChanged(true);
        }
    });

    return function ChangedStorage() {
        return (
            <ChangeAlert
                showAlert = {changed}
            />
        );
    }
}

export {WrappedChangedStorage};