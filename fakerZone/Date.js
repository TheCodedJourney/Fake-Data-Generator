
faker.date.between() // => "2022-11-10T16:35:17.061Z"
faker.date.between('2020-01-01T00:00:00.000Z', '2030-01-01T00:00:00.000Z') // '2026-05-16T02:22:53.002Z'

faker.date.betweens() // => ["2022-11-10T16:35:17.063Z","2022-11-10T16:35:1...
faker.date.betweens('2020-01-01T00:00:00.000Z', '2030-01-01T00:00:00.000Z')
// [
//   2022-07-02T06:00:00.000Z,
//   2024-12-31T12:00:00.000Z,
//   2027-07-02T18:00:00.000Z
// ]
faker.date.betweens('2020-01-01T00:00:00.000Z', '2030-01-01T00:00:00.000Z', 2)

faker.date.birthdate() // 1977-07-10T01:37:30.719Z
faker.date.birthdate({ min: 18, max: 65, mode: 'age' }) // 2003-11-02T20:03:20.116Z
faker.date.birthdate({ min: 1900, max: 2000, mode: 'year' }) // 1940-08-20T08:53:07.538Z

faker.date.future() // '2022-11-19T05:52:49.100Z'
faker.date.future(10) // '2030-11-23T09:38:28.710Z'
faker.date.future(10, '2020-01-01T00:00:00.000Z') // '2020-12-13T22:45:10.252Z'

faker.date.month() // 'October'
faker.date.month({ abbr: true }) // 'Feb'
faker.date.month({ context: true }) // 'June'
faker.date.month({ abbr: true, context: true }) // 'Sep'

faker.date.past() // '2021-12-03T05:40:44.408Z'
faker.date.past(10) // '2017-10-25T21:34:19.488Z'
faker.date.past(10, '2020-01-01T00:00:00.000Z') // '2017-08-18T02:59:12.350Z'

faker.date.recent() // '2022-02-04T02:09:35.077Z'
faker.date.recent(10) // '2022-01-29T06:12:12.829Z'
faker.date.recent(10, '2020-01-01T00:00:00.000Z') // '2019-12-27T18:11:19.117Z'

faker.date.past()

faker.date.soon() // '2022-02-05T09:55:39.216Z'
faker.date.soon(10) // '2022-02-11T05:14:39.138Z'
faker.date.soon(10, '2020-01-01T00:00:00.000Z') // '2020-01-01T02:40:44.990Z'

faker.date.future()

faker.date.weekday() // 'Monday'
faker.date.weekday({ abbr: true }) // 'Thu'
faker.date.weekday({ context: true }) // 'Thursday'
faker.date.weekday({ abbr: true, context: true }) // 'Fri'