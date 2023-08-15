import { PersonType } from "../shared/types"
import { CriminalsDataType } from "../store/CriminalsData"

const dangerLevels = ["High", "Medium", "Low"];
const weapons = ["Knife", "Pistol", "Stick", "Axe", "Pipe", "Sword", "Shotgun", "Rifle", "Machete"];
const offenses = ["Assault", "Robbery", "Murder", "Kidnapping", "Domestic violence"];

export const personProcessor = (personList: Array<PersonType>) : Array<CriminalsDataType> => {
    return personList.map((person : PersonType) => {
        const randomDangerLevel = dangerLevels[Math.floor(Math.random()*3)] as any;
        const randomWeapon = weapons[Math.floor(Math.random()*9)];
        const randomOffense = offenses[Math.floor(Math.random()*9)];

        return {
            name: {
                first: person.name.first,
                last: person.name.last,
            },
            age: person.dob.age,
            gender: person.gender,
            country: person.location.country,
            weapon: randomWeapon,
            offense: randomOffense,
            dangerLevel: randomDangerLevel
        }
    })
}