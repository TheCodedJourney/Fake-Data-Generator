// strategy: 'any-length' | 'closest' | 'fail' | 'longest' | 'shortest'
faker.word.adjective() // => "muddy"
faker.word.adjective(5) // 'slimy'
faker.word.adjective(100) // 'complete'
faker.word.adjective({ strategy: 'shortest' }) // 'icy'
faker.word.adjective({ length: { min: 5, max: 7 }, strategy: "fail" }) // 'distant'

// strategy: 'any-length' | 'closest' | 'fail' | 'longest' | 'shortest'
faker.word.adverb() // => "often"
faker.word.adverb(5) // 'madly'
faker.word.adverb(100) // 'sadly'
faker.word.adverb({ strategy: 'shortest' }) // 'too'
faker.word.adverb({ length: { min: 5, max: 7 }, strategy: "fail" }) // 'sweetly'

// strategy: 'any-length' | 'closest' | 'fail' | 'longest' | 'shortest'
faker.word.conjunction() // 'in order that'
faker.word.conjunction(5) // 'since'
faker.word.conjunction(100) // 'as long as'
faker.word.conjunction({ strategy: 'shortest' }) // 'or'
faker.word.conjunction({ length: { min: 5, max: 7 }, strategy: "fail" }) // 'hence'

// strategy: 'any-length' | 'closest' | 'fail' | 'longest' | 'shortest'
faker.word.interjection() // 'gah'
faker.word.interjection(5) // 'fooey'
faker.word.interjection(100) // 'yowza'
faker.word.interjection({ strategy: 'shortest' }) // 'hm'
faker.word.interjection({ length: { min: 5, max: 7 }, strategy: "fail" }) // 'boohoo'

// strategy: 'any-length' | 'closest' | 'fail' | 'longest' | 'shortest'
faker.word.noun() // 'external'
faker.word.noun(5) // 'front'
faker.word.noun(100) // 'care'
faker.word.noun({ strategy: 'shortest' }) // 'ad'
faker.word.noun({ length: { min: 5, max: 7 }, strategy: "fail" }) // 'average'

//  strategy: 'any-length' | 'closest' | 'fail' | 'longest' | 'shortest'
faker.word.preposition() // 'without'
faker.word.preposition(5) // 'abaft'
faker.word.preposition(100) // 'an'
faker.word.preposition({ strategy: 'shortest' }) // 'a'
faker.word.preposition({ length: { min: 5, max: 7 }, strategy: "fail" }) // 'given'

// strategy: 'any-length' | 'closest' | 'fail' | 'longest' | 'shortest'
faker.word.verb() // 'act'
faker.word.verb(5) // 'tinge'
faker.word.verb(100) // 'mess'
faker.word.verb({ strategy: 'shortest' }) // 'do'
//  strategy: 'any-length' | 'closest' | 'fail' | 'longest' | 'shortest'
faker.word.verb({ length: { min: 5, max: 7 }, strategy: "fail" }) // 'vault'
