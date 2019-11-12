import React from 'react';

import classes from './DoctorAdminHdrView.module.css';
import commonClasses from '../../../common.module.css';
import DoctorAdminMenuView from '../../menus/DoctorAdminMenuView/DoctorAdminMenuView';
import AboutClinicToolbarView from '../../toolbars/AboutClinicToolbarView/AboutClinicToolbarView';
import UserToolbarView from '../../toolbars/UserToolbarView/UserToolbarView';
import MenuToolbarView from '../../toolbars/MenuToolbarView/MenuToolbarView';
import SideDrawerToolbarView from '../../toolbars/SideDrawerToolbarView/SideDrawerToolbarView';

export default () => (
    <header className={classes.Header}>
        <nav>
            <AboutClinicToolbarView />
            <div className={classes.ToolbarHSeparator} />
            <div className={classes.MenuToggle_UserAccount_Toolbars}>
                <div className={commonClasses.SmallScreenOnly}>
                    <SideDrawerToolbarView />
                </div>
                <UserToolbarView />
            </div>
            <div className={commonClasses.LargeScreenOnly} >
                <MenuToolbarView>
                    <DoctorAdminMenuView />
                </MenuToolbarView>
            </div>
        </nav>
    </header>
);
