// @flow

const hasSymbol = typeof Symbol === 'function';

let lastId = 1;

export const ClinicMenuItem = {
    HOME: hasSymbol
        ? Symbol("ClinicMenuItem.HOME") 
        : lastId++,
    DOCTORS: hasSymbol
        ? Symbol("ClinicMenuItem.DOCTORS")
        : lastId++,
    PRICES: hasSymbol
        ? Symbol("ClinicMenuItem.PRICES") 
        : lastId++,
    ABOUT: hasSymbol
        ? Symbol("ClinicMenuItem.ABOUT") 
        : lastId++,
    CONTACT: hasSymbol
        ? Symbol("ClinicMenuItem.CONTACT") 
        : lastId++
}

export const UserMenuItem = {
    LOGIN: hasSymbol
        ? Symbol("UserMenuItem.LOGIN") 
        : lastId++,
    LOGOUT: hasSymbol
        ? Symbol("UserMenuItem.LOGOUT") 
        : lastId++,
    MY_ACCOUNT: hasSymbol
        ? Symbol("UserMenuItem.MY_ACCOUNT") 
        : lastId++
}

export const PatientMenuItem = {
    NEW_APPOINTMENT: hasSymbol
        ? Symbol("PatientMenuItem.NEW_APPOINTMENT") 
        : lastId++,
    MY_ACCOUNT: hasSymbol
        ? Symbol("PatientMenuItem.MY_ACCOUNT") 
        : lastId++
}

export const DoctorMenuItem = {
    HOME: hasSymbol
        ? Symbol("DoctorMenuItem.HOME")
        : lastId++,
    LOG_INTO_PATIENT_ACCOUNT: hasSymbol
        ? Symbol("DoctorMenuItem.LOG_INTO_PATIENT_ACCOUNT")
        : lastId++,
    LOG_OUT_PATIENT_ACCOUNT: hasSymbol
        ? Symbol("DoctorMenuItem.LOG_OUT_PATIENT_ACCOUNT")
        : lastId++,
    MY_ACCOUNT: hasSymbol
        ? Symbol("DoctorMenuItem.MY_ACCOUNT")
        : lastId++,
    APPOINTMENTS: hasSymbol
        ? Symbol("DoctorMenuItem.APPOINTMENTS")
        : lastId++,
    WORKING_TIME: hasSymbol
        ? Symbol("DoctorMenuItem.WORKING_TIME")
        : lastId++,
    NOTIFICATION_MESSAGES: hasSymbol
        ? Symbol("DoctorMenuItem.NOTIFICATION_MESSAGES")
        : lastId++,
    LOG_EVENTS: hasSymbol
        ? Symbol("DoctorMenuItem.LOG_EVENTS")
        : lastId++
}

export const SiteAdminMenuItem = {
    HOME: hasSymbol
        ? Symbol("SiteAdminMenuItem.HOME")
        : lastId++,
    MY_ACCOUNT: hasSymbol
        ? Symbol("SiteAdminMenuItem.MY_ACCOUNT")
        : lastId++,
    DOCTORS: hasSymbol
        ? Symbol("SiteAdminMenuItem.DOCTORS")
        : lastId++,
    SPECIALTIES: hasSymbol
        ? Symbol("SiteAdminMenuItem.SPECIALTIES")
        : lastId++,
    SERVICES: hasSymbol
        ? Symbol("SiteAdminMenuItem.SERVICES")
        : lastId++,
    ASSIGN_SERVICES_TO_DOCTOR: hasSymbol
        ? Symbol("SiteAdminMenuItem.ASSIGN_SERVICES_TO_DOCTOR")
        : lastId++,
    LOG_EVENTS: hasSymbol
        ? Symbol("SiteAdminMenuItem.LOG_EVENTS")
        : lastId++,
    SETTINGS: hasSymbol
        ? Symbol("SiteAdminMenuItem.SETTINGS")
        : lastId++
}
