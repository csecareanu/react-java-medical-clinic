// @flow
import { useContext } from 'react';
import UIStateContext from '../../react-context/UIState/UIState-context';
import { UserAuthType } from '../../shared/UserAuthType';

/**
 * Custom hook to check if the current authenticated / not authenticated user can access
 * a patient page.
 */
const useCanAccessPatientContent = () => {
    const uiStateContext = useContext(UIStateContext);

    if(uiStateContext.userAuthStatus === UserAuthType.PATIENT) {
        return true;
    }

    if(uiStateContext.isUserConnectedToAPatientAccount) {
        return true;
    }

    return false;
}

export default useCanAccessPatientContent;