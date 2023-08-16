import { State, hookstate, useHookstate } from "@hookstate/core";

export interface CriminalsDataType {
    name: {
        first: string;
        last: string;
    };
    age: number,
    gender: "female" | "male",
    country: string,
    weapon: string,
    offense: string,
    dangerLevel: "High" | "Medium" | "Low",
    img:string
};

const criminalsState = hookstate<Array<CriminalsDataType>>([]);

const wrapState = (s: State<Array<CriminalsDataType>>) => ({
    get: () => s.value,
    set: (list: Array<CriminalsDataType>) => s.set(list)
})
export const useGlobalState = () => wrapState(useHookstate(criminalsState))









