import inquirer from "inquirer";
import { save, get} from './readWritePromises.js';
import { promtUser } from "./promtUser.js";


const run = async () =>{
    const user = await promtUser()

    const userJson = await get ("./usuarios.json")

    const newUserData = [...userJson, user]

    save("./usuarios.json", newUserData)

}

run()