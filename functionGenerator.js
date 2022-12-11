const {faker} = require('@faker-js/faker')

// for (let i = 1; i <= 18; i++) {
//   console.log(i)
//   console.log(`Name: ${faker.name.firstName()}`)
//   console.log(`Email: ${faker.internet.email()}`)
//   console.log(`Product: ${faker.commerce.productName()}`)
//   console.log(`Company: ${faker.company.name()}`)
//   console.log(' ')
// }

function createRandomUser() {
  const sex = faker.name.sexType();
  const firstName = faker.name.firstName(sex);
  const lastName = faker.name.lastName();
  const email = faker.internet.email(firstName, lastName);
  const favWord = faker.company.bsBuzz()

  return {
    _id: faker.datatype.uuid(),
    avatar: faker.image.avatar(),
    email,
    firstName,
    lastName,
    sex,
    favWord,
    subscriptionTier: faker.helpers.arrayElement(['free', 'basic', 'business']),
  };
}

const user = createRandomUser();

const generate = 100

for(let i = 1; i <= generate; i++){
  console.log(createRandomUser(i))
}