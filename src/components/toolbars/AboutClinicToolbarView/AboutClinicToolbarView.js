import React from 'react';

import classes from './AboutClinicToolbarView.module.css';
import commonClasses from '../../../common.module.css';
import PhoneToolbarItemView from './PhoneToolbarItemView/PhoneToolbarItemView';
import EmailToolbarItemView from './EmailToolbarItemView/EmailToolbarItemView';
import BrandLargeToolbarItemView from '../../UI/BrandLargeView/BrandLargeView';
import BrandSmallToolbarItemView from '../../UI/SecondBrandView/SecondBrandView';
import ToolbarGroupView, { ToolbarSepPos } from '../common/ToolbarGroupView/ToolbarGroupView';



export default () => {
    return (
        <div className={classes.Toolbar} >
                <div className={classes.LeftItems} >
                    {/* Adding a separator below brand to keep a distance with the
                    phone element. The phone element will be below brand on small screens */}
                    <ToolbarGroupView separator={ToolbarSepPos.DOWN | ToolbarSepPos.RIGHT}>
                        <BrandLargeToolbarItemView />
                    </ToolbarGroupView>
                </div>
                <div className={classes.RightItems}>
                    <div className={classes.RightUp}>
                        {/* Adding a separator below phone to keep a distance with the
                        email element. The email element will be below brand on small screens */}
                        <ToolbarGroupView separator={ToolbarSepPos.DOWN}>
                            <PhoneToolbarItemView />
                        </ToolbarGroupView>
                        {/* The horizontal separator between email and phone is kept in the
                        same 'div' with email for the case when the email wraps, to keep
                        the email and phone right aligned. */}
                        <ToolbarGroupView separator={ToolbarSepPos.DOWN | ToolbarSepPos.LEFT}>
                            <EmailToolbarItemView />
                        </ToolbarGroupView>
                    </div>
                    <div className={classes.RightDown}>
                        <div className={commonClasses.LargeScreenOnly} >
                            <BrandSmallToolbarItemView/>
                        </div>
                    </div>
                </div>
        </div>
    );
}