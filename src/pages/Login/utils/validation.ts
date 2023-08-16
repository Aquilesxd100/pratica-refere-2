import * as yup from 'yup';


export interface FormPoliceAuthentication {
    firstName: string;
    secondName: string;
    identificationNumber: string;
    registrationDate: string;
  }

export const SchemaPoliceValidation = yup.object().shape({
    firstName: yup.string().min(3).required('First name is required'),
    secondName: yup.string().required('Second name is required'),
    identificationNumber: yup.string().min(6, 'Identification number needs 6 characters').required('Identification number is required'),
    registrationDate:yup.string().min(10, 'Need the full date').required('Registration Date is required')
})