import {within} from "./comparison";

export function sortByAppointmentTime(appt1, appt2) {
    if (appt1.appointment_time < appt2.appointment_time) {
        return -1;
    }
    if (appt1.appointment_time > appt2.appointment_time) {
        return 1;
    }
    return 0;
}

export function sortByCheckInTime(appt1, appt2) {
    if (appt1.checkin_time < appt2.checkin_time) {
        return 1;
    }
    if (appt1.checkin_time > appt2.checkin_time) {
        return -1;
    }
    return 0;
}

export function getFilterFunction(filterValues) {
    let from = filterValues['from'];
    let to = filterValues['to'];
    let location = filterValues["location"];
    return function (appt) {
        if(location !== "ALL" && (!appt.clinic_location || appt.clinic_location.clinic_location_id !== location))
            return false;
        if (!within(from, appt.appointment_time, to))
            return false;
        return true;
    }
}