
import React from 'react';

import MainLayoutContainer from '../../../layouts/MainLayoutContainer/MainLayoutContainer';
import SysAdminHdrView from '../../../headers/SysAdminHdrView/SysAdminHdrView';

export default () => (
    <MainLayoutContainer header={<SysAdminHdrView />}>
        <h1>Admin Services Page</h1>
    </MainLayoutContainer>
);
