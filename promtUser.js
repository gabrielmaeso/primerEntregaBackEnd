import inquirer from "inquirer";

const gastos = [
    {
        type: 'input',
        name: 'gasto',
        message: "Cual es tu gasto?",
    },
    {
        type: 'input',
        name: 'monto',
        message: "Cual es el monto del gasto?",
    }
];

export const promtUser = async()=>{
    return await inquirer.prompt(gastos)
}
