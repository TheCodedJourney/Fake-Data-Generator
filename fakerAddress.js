const {faker} = require('@faker-js/faker')

//Builder Number 
for(let i = 0; i < 10; i++){
    console.log(faker.address.buildingNumber())
}

faker.address.buildingNumber() //string
faker.address.cardinalDirection(false) //south - string
faker.address.cardinalDirection(true) // S - string
faker.address.city() 
faker.address.cityName()
faker.address.country() //Malta || Greece
faker.address.county()
faker.address.countryCode('alpha-3') //TJA 
faker.address.countryCode('alpha-2') // TJ
faker.address.direction(false) // South
faker.address.direction(true) //NE
faker.address.ordinalDirection(false) // 'Northwest'
faker.address.ordinalDirection(true) // 'NE'
faker.address.secondaryAddress() 
faker.address.state()
faker.address.stateAbbr()
faker.address.street()
faker.address.streetAddress(false) // '34830 Erdman Hollow'
faker.address.streetAddress(true) // '3393 Ronny Way Apt. 742'
faker.address.timeZone()
faker.address.zipCode() // '17839'
faker.address.zipCode('####') // '6925'
//latitude & longitude  -- max number latitude upp boundary, min numer lower boundary decimal points 
// SYNTAX (max, min, precision) 
faker.address.latitude(90, -90, 4)
faker.address.longitude(10, -10, 5)
//faker.address.nearbyGPSCoordinate(coordinate?: [latitude: number, longitude: number], radius: number = 10, isMetric: boolean = false): [latitude: string, longitude: string
faker.address.nearbyGPSCoordinate([33, -170], 1000, true)
