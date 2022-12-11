faker.internet.avatar()
// 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/315.jpg'

faker.internet.color() // '#30686e'
faker.internet.color(100, 100, 100) // '#4e5f8b'

faker.internet.domainName() // 'slow-timer.info'

faker.internet.domainSuffix() // 'com'
faker.internet.domainSuffix() // 'name'

faker.internet.domainWord() // 'close-reality'
faker.internet.domainWord() // 'weird-cytoplasm'

faker.internet.email() // 'Kassandra4@hotmail.com'
faker.internet.email('Jeanne', 'Doe') // 'Jeanne63@yahoo.com'
faker.internet.email('Jeanne', 'Doe', 'example.fakerjs.dev') // 'Jeanne_Doe88@example.fakerjs.dev'
faker.internet.email('Jeanne', 'Doe', 'example.fakerjs.dev', { allowSpecialCharacters: true }) // 'Jeanne%Doe88@example.fakerjs.dev'


faker.internet.emoji() // '🥰'
faker.internet.emoji({ types: ['food', 'nature'] }) // '🥐'

faker.internet.exampleEmail() // 'Helmer.Graham23@example.com'
faker.internet.exampleEmail('Jeanne', 'Doe') // 'Jeanne96@example.net'
faker.internet.exampleEmail('Jeanne', 'Doe', { allowSpecialCharacters: true }) // 'Jeanne%Doe88@example.com'

faker.internet.httpMethod()// "GET" | "POST" | "PUT" | "DELETE" | "PATCH"
faker.internet.httpMethod() // => "PUT"
faker.internet.httpMethod() // 'PATCH'

faker.internet.httpStatusCode() // 200
faker.internet.httpStatusCode({ types: ['success', 'serverError'] }) // 500

faker.internet.ip() // '245.108.222.0'
faker.internet.ipv4() // '245.108.222.0'
faker.internet.ipv6() // '269f:1230:73e3:318d:842b:daab:326d:897b'
faker.internet.mac() // '32:8e:2e:09:c6:05'

faker.internet.password() // '89G1wJuBLbGziIs'
faker.internet.password(20) // 'aF55c_8O9kZaPOrysFB_'
faker.internet.password(20, true) // 'lawetimufozujosodedi'
faker.internet.password(20, true, /[A-Z]/) // 'HMAQDFFYLDDUTBKVNFVS'
faker.internet.password(20, true, /[A-Z]/, 'Hello ') // 'Hello IREOXTDWPERQSB'

faker.internet.port() // '9414'
faker.internet.protocol() // => "https" || http
faker.internet.url() // 'https://remarkable-hackwork.info'
faker.internet.userAgent()
// 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_8_8)  AppleWebKit/536.0.2 (KHTML, like Gecko) Chrome/27.0.849.0 Safari/536.0.2'

faker.internet.userName() // 'Nettie_Zboncak40'
faker.internet.userName('Jeanne', 'Doe') // 'Jeanne98'
