export const new_appointment = [
    {
        "label":"Patient",
        "type":"patient",
        "name":"patient_id",
        "required":true
    },
    {
        "label":"Location",
        "type":"location",
        "name":"appointment_location",
        "required":true
    },
    {
        "label":"Practitioner",
        "type":"practitioner",
        "name":"practitioner",
        "required":true
    },
    {
        "label":"Appointment Time",
        "type":"datetime",
        "name":"appointment_time",
        "required": true,
        "start": new Date(),
        "value": new Date(),
        "minute_step": 15
    }
];