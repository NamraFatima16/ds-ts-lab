import {Friend, Colleague } from './myType'
import { friends, colleagues } from "./01-basics";


function older(f: Friend) : string {
    f.age += 1
    return `${f.name} is now ${f.age}` 
}

console.log(older(friends[0]))

function allOlder(friends: Friend[]): string[] {
    return friends.map(f => {
        f.age +=1;
        return `${f.name} is now ${f.age}`;
    });
}

console.log(allOlder(friends))


function addColleague(cs:Colleague[], name: string, department: string, email: string) : void {

    const highExten = highestExtension(cs);
    const newHighExten = highExten.contact.extension + 1 
// creating a new collegue 
    const newColleague : Colleague = {
        name,
        department,
        contact:{
            email,
            extension: newHighExten
        }
      
    };
   cs.push(newColleague)
   
}

// Find the colleague with the highest extension number.
function highestExtension(cs: Colleague[]): Colleague {
    const result = cs.sort(
      (c1, c2) => c1.contact.extension - c2.contact.extension
    );
    return result[cs.length - 1];
  }
  console.log(highestExtension(colleagues.current));

  addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
  console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));