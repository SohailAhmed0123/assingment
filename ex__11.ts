/*Question 12: Greetings: Use the array from Exercise 11. Instead of just printing each person’s name, print a message to them. The message should be the same for each person, but personalized with their name.*/

let names: string[] = ["Alice", "Bob", "Charlie"];
for (let name of names) {
    console.log(`Hello ${name}, would you like to learn some TypeScript today?`);
}