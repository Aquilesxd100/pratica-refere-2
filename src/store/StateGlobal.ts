import { State, hookstate, useHookstate } from "@hookstate/core";
export interface CriminalsDataType {
    name: string;
    age: number,
    gender: "female" | "male",
    country: string,
    weapon: string,
    offense: string,
    dangerLevel: "High" | "Medium" | "Low",
    img:string
};

export interface PoliceAuthenticationType{
    firstName: string;
    secondName: string;
    identificationNumber: string;
    registrationDate: string;
}


const criminalsState = hookstate<Array<CriminalsDataType>>([]);
const policesState = hookstate<Array<PoliceAuthenticationType>>([
    {firstName: 'Benjamin', secondName: 'Davis', identificationNumber: '987654', registrationDate: '08/21/2012'},
    {firstName: 'Olivia', secondName: 'Thompson', identificationNumber: '234567', registrationDate: '03/15/2018'},
    {firstName: 'Liam', secondName: 'Anderson', identificationNumber: '876543', registrationDate: '11/30/2014'},
    {firstName: 'Admin', secondName: '1', identificationNumber: '123456', registrationDate: '11/11/1111'},
    {firstName: 'Ava', secondName: 'Martinez', identificationNumber: '345678', registrationDate: '09/07/2019'},
    {firstName: 'Ethan', secondName: 'Wilson', identificationNumber: '789012', registrationDate: '06/25/2011'}
])


const wrapStateCriminals = (s: State<Array<CriminalsDataType>>) => ({
    get: () => s.value,
    set: (list: Array<CriminalsDataType>) => s.set(list)
})

const wrapStatePolices = (s: State<Array<PoliceAuthenticationType>>) => ({
    get: () => s.value,
    add: (list: PoliceAuthenticationType) => s.merge([list])
})



export const useGlobalStateCriminals = () => wrapStateCriminals(useHookstate(criminalsState))
export const useGlobalStatePolices = () => wrapStatePolices(useHookstate(policesState))







