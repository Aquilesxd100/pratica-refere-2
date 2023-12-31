import { PersonType } from "../shared/types";
import { CriminalsDataType } from "../store/StateGlobal";

export const dangerLevels = ["High", "Medium", "Low"];
export const weapons = ["Knife", "Pistol", "Stick", "Axe", "Pipe", "Sword", "Shotgun", "Rifle", "Machete"];
export const offenses = ["Assault", "Robbery", "Murder", "Kidnapping", "Domestic violence"];

export const personProcessor = (personList: Array<PersonType>) : Array<CriminalsDataType> => {
    return personList.map((person : PersonType) => {
        const randomDangerLevel = dangerLevels[Math.floor(Math.random()*3)] as any;
        const randomWeapon = weapons[Math.floor(Math.random()*9)];
        const randomOffense = offenses[Math.floor(Math.random()*5)];

        return {
            uuid: crypto.randomUUID(),
            name: person.name.first + " " + person.name.last,
            age: person.dob.age,
            gender: person.gender,
            country: person.location.country,
            weapon: randomWeapon,
            offense: randomOffense,
            dangerLevel: randomDangerLevel,
            img:person.picture.large
        }
    })
}