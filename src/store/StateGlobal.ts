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
const policesState = hookstate<Array<PoliceAuthenticationType>>([])


const wrapStateCriminals = (s: State<Array<CriminalsDataType>>) => ({
    get: () => s.value,
    set: (list: Array<CriminalsDataType>) => s.set(list)
})

const wrapStatePolices = (s: State<Array<PoliceAuthenticationType>>) => ({
    get: () => s.value,
    set: (list: Array<PoliceAuthenticationType>) => s.set(list)
})



export const useGlobalStateCriminals = () => wrapStateCriminals(useHookstate(criminalsState))
export const useGlobalStatePolices= () => wrapStateCriminals(useHookstate(criminalsState))








