import {gql} from 'apollo-boost';

export const GET_APPOINTMENT_OVERVIEW = gql`
query {
    listAppointments{
        appointment_id,
        status,
        reminder_status,
        covid_flag,
        appointment_time,
        clinic_location {
            latitude,
            longitude,
            address,
            clinic_location_name,
            clinic_location_id
        },
        patient {
            given_name,
            last_name,
            phone_number
        },
        check_in_latitude,
        check_in_longitude,
        check_in_time,
        forms(dummy: "value"),
    }
}
`;

export const CREATE_NEW_APPOINTMENT = gql`
    mutation(
        $status: String!,
        $appointment_time: AWSTimestamp!,
        $patient_id: ID!,
        $clinic_location_id: ID!,
        $doctor_id: ID!)
    {    
        createAppointment(
            status: $status
            appointment_time: $appointment_time
            patient_id: $patient_id
            clinic_location_id: $clinic_location_id
            doctor_id: $doctor_id)
            {
                status
            }
    }
    `;

export const DELETE_APPOINTMENT = gql`
    mutation($appointment_id: ID!){
        deleteAppointment(appointment_id: $appointment_id){appointment_id}
    }
    `;
export const SUMMON_PATIENT = gql`
    mutation($appointment_id: ID!){
        summonPatient(appointment_id: $appointment_id){appointment_id}
    }
    `;
export const RESEND_CHECKIN_LINK = gql`
    mutation($appointment_id: ID!){
        sendCheckInText(appointment_id: $appointment_id)
    }
    `