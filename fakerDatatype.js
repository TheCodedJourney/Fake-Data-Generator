
faker.datatype.array() // [ 94099, 85352, 'Hz%T.C\\l;8', '|#gmtw3otS', '2>:rJ|3$&d', 56864, 'Ss2-p0RXSI', 51084, 2039, 'mNEU[.r0Vf' ]
faker.datatype.array(3) // [ 61845, 'SK7H$W3:d*', 'm[%7N8*GVK' ]

faker.datatype.bigInt() // 55422n
faker.datatype.bigInt(100n) // 52n
faker.datatype.bigInt({ min: 1000000n }) // 431433n
faker.datatype.bigInt({ max: 100n }) // 42n
faker.datatype.bigInt({ min: 10n, max: 100n }) // 36n

faker.datatype.boolean() // => true
faker.datatype.boolean() // false

faker.datatype.datetime() // '2089-04-17T18:03:24.956Z'
faker.datatype.datetime(1893456000000) // '2022-03-28T07:00:56.876Z'
faker.datatype.datetime({ min: 1577836800000, max: 1893456000000 }) // '2021-09-12T07:13:00.255Z'

faker.datatype.float() // 51696.36
faker.datatype.float(0.1) // 52023.2
faker.datatype.float({ min: 1000000 }) // 212859.76
faker.datatype.float({ max: 100 }) // 28.11
faker.datatype.float({ precision: 0.1 }) // 84055.3
faker.datatype.float({ min: 10, max: 100, precision: 0.001 }) // 57.315

faker.datatype.hexadecimal() // '0xB'
faker.datatype.hexadecimal({ length: 10 }) // '0xaE13d044cB'
faker.datatype.hexadecimal({ prefix: '0x' }) // '0xE'
faker.datatype.hexadecimal({ case: 'lower' }) // '0xf'
faker.datatype.hexadecimal({ length: 10, prefix: '#' }) // '#f12a974eB1'
faker.datatype.hexadecimal({ length: 10, case: 'upper' }) // '0xE3F38014FB'
faker.datatype.hexadecimal({ prefix: '', case: 'lower' }) // 'd'
faker.datatype.hexadecimal({ length: 10, prefix: '0x', case: 'mixed' }) // '0xAdE330a4D1'

faker.datatype.json() // `{"foo":"mxz.v8ISij","bar":29154,"bike":8658,"a":"GxTlw$nuC:","b":40693,"name":"%'<FTou{7X","prop":"X(bd4iT>77"}`

faker.datatype.number() // 55422
faker.datatype.number(100) // 52
faker.datatype.number({ min: 1000000 }) // 1031433
faker.datatype.number({ max: 100 }) // 42
faker.datatype.number({ precision: 0.01 }) // 64246.18
faker.datatype.number({ min: 10, max: 100, precision: 0.01 }) // 36.94

faker.datatype.string() // 'Zo!.:*e>wR'
faker.datatype.string(5) // '6Bye8'

faker.datatype.uuid() // '4136cd0b-d90b-4af7-b485-5d1ded8db252'
