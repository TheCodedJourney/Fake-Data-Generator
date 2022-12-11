faker.system.commonFileExt() // 'gif'

faker.system.commonFileName() // 'dollar.jpg'
faker.system.commonFileName('txt') // 'global_borders_wyoming.txt'

faker.system.commonFileType() // 'audio'

faker.system.cron() // '45 23 * * 6'
faker.system.cron({ includeYear: true }) // '45 23 * * 6 2067'
faker.system.cron({ includeYear: false }) // '45 23 * * 6'
faker.system.cron({ includeNonStandard: false }) // '45 23 * * 6'
faker.system.cron({ includeNonStandard: true }) // '@yearly'

faker.system.directoryPath() // '/etc/mail'

faker.system.fileExt() // 'emf'
faker.system.fileExt('application/json') // 'json'

faker.system.fileName() // 'self_enabling_accountability_toys.kpt'
faker.system.fileName({ extensionCount: 2 }) // 'bike_table.res.vcs'

faker.system.filePath() // '/usr/local/src/money.dotx'
faker.system.fileType() // 'message'
faker.system.mimeType() // 'video/vnd.vivo'

faker.system.networkInterface() // 'enp0s3'
faker.system.networkInterface({ interfaceType: 'wl' }) // 'wlo1'
faker.system.networkInterface({ interfaceSchema: 'mac' }) // 'enx000c29c00000'
faker.system.networkInterface({ interfaceType: 'en', interfaceSchema: 'pci' }) // 'enp5s0f1d0'

faker.system.semver() // '1.1.2'
