
import React from 'react';

import MainLayout from '../../../layouts/MainLayout/MainLayout';
import DoctorAdminHdrView from '../../../headers/DoctorAdminHdrView/DoctorAdminHdrView';

export default () => (
    <MainLayout header={<DoctorAdminHdrView />}>
        <h1>Appointments Info Page</h1>
    </MainLayout>
);
