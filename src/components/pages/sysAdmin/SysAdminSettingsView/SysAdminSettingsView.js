
import React from 'react';

import MainLayoutView from '../../../layouts/MainLayoutView/MainLayoutView';
import SysAdminHdrView from '../../../headers/SysAdminHdrView/SysAdminHdrView';

export default () => (
    <MainLayoutView header={<SysAdminHdrView />}>
        <h1>Admin Settings Page</h1>
    </MainLayoutView>
);
