import React from 'react';
import { FormattedMessage } from 'react-intl';

import classes from './UserLoginView.module.css';
import LoginExistingAccount from '../common/LoginExistingAccount/LoginExistingAccount';
import CreatePatientAccount from '../common/CreatePatientAccount/CreatePatientAccount';
import Button, { ButtonType } from '../../../UI/Button/Button';
import FormControlsView from '../../../UI/FormControlsView/FormControlsView';
import Backdrop from '../../../UI/Backdrop/Backdrop';


const userLoginView = () => {
    const createAccountText = <FormattedMessage id="label_no_account_create_one" 
                                    defaultMessage={"If you don't have an account create one"}/>

    return (
        <React.Fragment>
            <Backdrop show={true}/>
            <div className={classes.Login}>
                <div className={classes.LoginContent}>
                    <div className={classes.CancelButton}>
                        <Button type={ButtonType.DANGER}>
                            <FormattedMessage id="cancel" defaultMessage={'Cancel'}/>
                        </Button>
                    </div>
                    <FormControlsView.HorizontalSep repeat='2'/>

                    <LoginExistingAccount />
                    <FormControlsView.HorizontalSep repeat='10'/>

                    <FormControlsView.Group name={createAccountText} stressedName>
                        <FormControlsView.HorizontalSep repeat='2'/>
                        <CreatePatientAccount />
                    </FormControlsView.Group>
                </div>
            </div>
        </React.Fragment>
    );
}

export default userLoginView;