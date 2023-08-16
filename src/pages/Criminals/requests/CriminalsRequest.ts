import { personProcessor } from "../../../utils/personProcessor";

export const criminalsRequest = async () => {
    const response = await fetch("https://randomuser.me/api?results=20")
                            .then((res: any) => res.json())
                            .then((data: any) => data.results);

    return personProcessor(response);
    
};