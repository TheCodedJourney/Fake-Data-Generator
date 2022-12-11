const {faker} = require('@faker-js/faker')
const fs = require('fs');

function createRandomUser() {
  const sex = faker.name.sexType();
  const firstName = faker.name.firstName(sex);
  const lastName = faker.name.lastName();
  const email = faker.internet.email(firstName, lastName);
  const favWord = faker.company.bsBuzz();
  const tiger = faker.animal.lion();
  const product = faker.commerce.product(); 
  const avatar = faker.internet.avatar();
  //add a function from one of the files in fakerZone directory 

  return {
    sex,
    firstName,
    lastName,
    email,
    favWord,
    tiger,
    product,
    avatar
  };
}

//set number of random users using the generate variable
const numberOfUsers = 567
const users = [...Array(numberOfUsers)].map(() => createRandomUser())

const jsonData = JSON.stringify(users)
fs.writeFile("file.json", jsonData, 'utf-8', (err) =>{
    if (err) {
        console.log(err);
    }
});

module.exports = {users}
