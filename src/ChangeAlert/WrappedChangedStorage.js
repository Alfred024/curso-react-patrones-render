import React from "react";

function WrappedChangedStorage(ChangeAlert) {
    
    return 

    function ChangedStorage(props) {

        const [changed, setChanged] = React.useState(false);
    
        window.addEventListener('storage', (change)=>{
            if(change.key === 'TODOS_V1'){
                setChanged(true);
            }
        });

        return (
            <ChangeAlert
                change = {changed}
                showAlert = {props.storageChanged}
            />
        );
    }
}

export {WrappedChangedStorage};