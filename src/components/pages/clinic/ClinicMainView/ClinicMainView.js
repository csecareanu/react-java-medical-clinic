import React from 'react';
import { FormattedMessage } from 'react-intl';

import classes from './ClinicMainView.module.css';
import MainLayoutView from '../../../layouts/MainLayoutView/MainLayoutView';
import MainHdr from '../../../headers/MainHdr/MainHdr';
import ClinicServicesView from './src/ClinicServicesView/ClinicServicesView';
import ClinicDescView from './src/ClinicDescView/ClinicDescView';
import ClinicMainTitleView from './src/ClinicMainTitleView/ClinicMainTitleView';

export default () => {
    const clinicNameText =  <FormattedMessage id="main_page_clinic_name" defaultMessage={'TAI CHI MEDICAL'} />;
    const clinicOurServicesText =  <FormattedMessage id="main_page_our_services" defaultMessage={'OUR SERVICES'} />;
    return (
        <MainLayoutView header={<MainHdr />}>

            <div className={classes.MainView}>
                
                <ClinicMainTitleView text={clinicNameText} />
                <ClinicDescView />

                <div className={classes.SectionSep}></div>

                <ClinicMainTitleView text={clinicOurServicesText} />
                <ClinicServicesView />

                <div className={classes.SectionSep}></div>
            </div>
        </MainLayoutView>
    );
}
