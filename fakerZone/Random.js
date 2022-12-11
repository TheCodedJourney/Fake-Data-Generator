faker.random.alpha() // 'b'
faker.random.alpha(10) // 'qccrabobaf'
faker.random.alpha({ count: 5, casing: 'upper', bannedChars: ['A'] }) // 'DTCIC'

faker.random.alphaNumeric() // '2'
faker.random.alphaNumeric(5) // '3e5v7'
faker.random.alphaNumeric(5, { bannedChars: ["a"] }) // 'xszlm'

faker.random.locale() // 'el'

faker.random.numeric() // '2'
faker.random.numeric(5) // '31507'
faker.random.numeric(42) // '56434563150765416546479875435481513188548'
faker.random.numeric(42, { allowLeadingZeros: true }) // '00564846278453876543517840713421451546115'
faker.random.numeric(6, { bannedDigits: ['0'] }) // '943228'


faker.random.word() // 'Seamless'

faker.random.words() // 'neural'
faker.random.words(5) // 'copy Handcrafted bus client-server Point'
