import {gql} from 'apollo-boost';

export const CREATE_PATIENT = gql`
    mutation CreatePatient($patient: PatientInput!){
        createPatient(patient: $patient){
            birth_date,
            name,
            phone_number,
            patient_id
        }
    } 
`;

export const UPDATE_PATIENT = gql`
    mutation UpdatePatient($patient: PatientInput!, $patient_id: ID!){
        updatePatient(patient: $patient, patient_id: $patient_id){
            birth_date,
            given_name,
            last_name,
            phone_number,
            patient_id
        }
    }
`;

export const GET_ALL_PATIENTS = gql`
    query {
      listPatients{
        patient_id,
        name,
        phone_number,
        birth_date,
      }
    }
`;

export const DELETE_PATIENT = gql`
mutation DeletePatient($patient_id: ID!){
    deletePatient(patient_id: $patient_id){
        patient_id
    }
}  
`;