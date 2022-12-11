faker.name.findName() // 'Allen Brown'
faker.name.findName('Joann') // 'Joann Osinski'
faker.name.findName('Marcella', '', 'female') // 'Mrs. Marcella Huels'
faker.name.findName(undefined, 'Beer') // 'Mr. Alfonso Beer'
faker.name.findName(undefined, undefined, 'male') // 'Fernando Schaefer'

faker.name.fullName()
faker.name.firstName() // 'Antwan'
faker.name.firstName('female') // 'Victoria'
faker.name.firstName('male') // 'Tom'

faker.name.fullName() // 'Allen Brown'
faker.name.fullName({ firstName: 'Joann' }) // 'Joann Osinski'
faker.name.fullName({ firstName: 'Marcella', sex: 'female' }) // 'Mrs. Marcella Huels'
faker.name.fullName({ lastName: 'Beer' }) // 'Mr. Alfonso Beer'
faker.name.fullName({ sex: 'male' }) // 'Fernando Schaefer'

// faker.name.gender(binary?: boolean = false): string
faker.name.gender() // 'Trans*Man'
faker.name.sex() // if you would like to generate binary-gender value
faker.name.jobArea() // 'Brand'
faker.name.jobDescriptor() // 'Customer'
faker.name.jobTitle() // 'Global Accounts Engineer'
faker.name.jobType() // 'Assistant'
faker.name.lastName() // 'Hauck'
faker.name.lastName('female') // 'Grady'
faker.name.lastName('male') // 'Barton'

faker.name.middleName() // 'James'
faker.name.middleName('female') // 'Eloise'
faker.name.middleName('male') // 'Asher'

faker.name.prefix() // 'Miss'
faker.name.prefix('female') // 'Ms.'
faker.name.prefix('male') // 'Mr.'

faker.name.sex() // 'female'
faker.name.gender() //if you would like to generate gender related values.
faker.name.sexType() // "female" | "male"
faker.name.suffix() // => "V"
faker.name.suffix() // 'DDS'
