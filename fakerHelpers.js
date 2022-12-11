
faker.helpers.arrayElement() // => "b"
faker.helpers.arrayElement(['cat', 'dog', 'mouse']) // 'dog'

faker.helpers.arrayElements() // => ["c","b"]
faker.helpers.arrayElements(['cat', 'dog', 'mouse']) // ['mouse', 'cat']
faker.helpers.arrayElements([1, 2, 3, 4, 5], 2) // [4, 2]

// fake#
// Generator for combining faker methods based on a static string input.

// Note: We recommend using string template literals instead of fake(), which are faster and strongly typed (if you are using TypeScript), e.g. const address = `${faker.address.zipCode()} ${faker.address.city()}`;

// This method is useful if you have to build a random string from a static, non-executable source (e.g. string coming from a user, stored in a database or a file).

// It checks the given string for placeholders and replaces them by calling faker methods:

// const hello = faker.helpers.fake('Hi, my name is {{name.firstName}} {{name.lastName}}!')
// This would use the faker.name.firstName() and faker.name.lastName() method to resolve the placeholders respectively.

// It is also possible to provide parameters. At first, they will be parsed as json, and if that isn't possible, we will fall back to string:

// const message = faker.helpers.fake(`You can call me at {{phone.number(+!# !## #### #####!)}}.')
// Currently it is not possible to set more than a single parameter.

// It is also NOT possible to use any non-faker methods or plain javascript in such templates.

faker.helpers.fake('{{name.lastName}}') // 'Barrows'
faker.helpers.fake('{{name.lastName}}, {{name.firstName}} {{name.suffix}}') // 'Durgan, Noe MD'
faker.helpers.fake('This is static test.') // 'This is static test.'
faker.helpers.fake('Good Morning {{name.firstName}}!') // 'Good Morning Estelle!'
faker.helpers.fake('You can call me at {{phone.number(!## ### #####!)}}.') // 'You can call me at 202 555 973722.'
faker.helpers.fake('I flipped the coin and got: {{helpers.arrayElement(["heads", "tails"])}}') // 'I flipped the coin and got: tails'

faker.helpers.mustache() //to use custom functions for resolution 

faker.helpers.maybe(() => 'Hello World!') // 'Hello World!'
faker.helpers.maybe(() => 'Hello World!', { probability: 0.1 }) // undefined
faker.helpers.maybe(() => 'Hello World!', { probability: 0.9 }) // 'Hello World!'

// faker.helpers.mustache('I found {{count}} instances of "{{word}}".', {
//   count: () => `${faker.datatype.number()}`,
//   word: "this word",
// }) // 'I found 57591 instances of "this word".'

faker.helpers.objectKey({ myProperty: 'myValue' }) // 'myProperty'
faker.helpers.objectValue({ myProperty: 'myValue' }) // 'myValue'

faker.helpers.regexpStyleStringParse() // ''
faker.helpers.regexpStyleStringParse('#{5}') // '#####'
faker.helpers.regexpStyleStringParse('#{2,9}') // '#######'
faker.helpers.regexpStyleStringParse('[500-15000]') // '8375'
faker.helpers.regexpStyleStringParse('#{3}test[1-5]') // '###test3'

faker.helpers.replaceCreditCardSymbols() // '6453-4876-8626-8995-3771'
faker.helpers.replaceCreditCardSymbols('1234-[4-9]-##!!-L') // '1234-9-5298-2'

faker.helpers.replaceSymbolWithNumber() // ''
faker.helpers.replaceSymbolWithNumber('#####') // '04812'
faker.helpers.replaceSymbolWithNumber('!####') // '27378'
faker.helpers.replaceSymbolWithNumber('Your pin is: !####') // '29841'

faker.helpers.replaceSymbols() // ''
faker.helpers.replaceSymbols('#####') // '98441'
faker.helpers.replaceSymbols('?????') // 'ZYRQQ'
faker.helpers.replaceSymbols('*****') // '4Z3P7'
faker.helpers.replaceSymbols('Your pin is: #?*#?*') // '0T85L1'

faker.helpers.shuffle() // []
faker.helpers.shuffle(['a', 'b', 'c']) // [ 'b', 'c', 'a' ]

faker.helpers.slugify() // ''
faker.helpers.slugify("Hello world!") // 'Hello-world'

faker.helpers.uniqueArray() // => []
faker.helpers.uniqueArray(faker.random.word, 50)
faker.helpers.uniqueArray(faker.definitions.name.first_name, 6)
faker.helpers.uniqueArray(["Hello", "World", "Goodbye"], 2)
