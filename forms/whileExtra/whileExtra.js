let firstName = prompt('Enter your first name')
let lastName = prompt('Enter your last name')
let name = firstName.concat(lastName)
for (i = 0; i < name.length; i++)
  console.log(`Letter ${i + 1} is ${name[i]}.`)


