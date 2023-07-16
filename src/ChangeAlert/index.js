import React from "react";
import { WrappedChangedStorage } from "./WrappedChangedStorage";

//Debemos crear una función que cuando el localStorage se modifique, setee los nuevos items
function ChangeAlert({change, showAlert}) {
    return(
        change ? (
            <div>
                <p>Hubo cambios en tus TODOs.</p>
                <p>¿Deseas actualizar?</p>
                <button 
                    onClick={() =>{
                        showAlert();
                    }}
                >
                    Actualizar
                </button>
            </div>
        ) : (
            null
        )
    );
}

export const ChangeStorageNotification = WrappedChangedStorage(ChangeAlert);
