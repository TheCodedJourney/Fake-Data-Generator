
faker.finance.account() // 92842238
faker.finance.account(5) // 32564

faker.finance.accountName() // 'Personal Loan Account'

faker.finance.amount() // '617.87'
faker.finance.amount(5, 10) // '5.53'
faker.finance.amount(5, 10, 0) // '8'
faker.finance.amount(5, 10, 2, '$') // '$5.85'
faker.finance.amount(5, 10, 5, '', true) // '9,75067'

faker.finance.bic() // 'WYAUPGX1'
faker.finance.bic({ includeBranchCode: true }) // 'KCAUPGR1432'
faker.finance.bic({ includeBranchCode: false }) // 'XDAFQGT7'

faker.finance.bitcoinAddress() // '3ySdvCkTLVy7gKD4j6JfSaf5d'
faker.finance.creditCardCVV() // '506'
faker.finance.creditCardIssuer() // => "maestro"

faker.finance.creditCardNumber() // '4427163488662'
faker.finance.creditCardNumber('visa') // '4882664999007'
faker.finance.creditCardNumber('63[7-9]#-####-####-###L') // '6375-3265-4676-6646'

faker.finance.currencyCode() // 'USD'
faker.finance.currencyName() // 'US Dollar'
faker.finance.currencySymbol() // '$'
faker.finance.ethereumAddress() // '0xf03dfeecbafc5147241cc4c4ca20b3c9dfd04c4a'

faker.finance.iban() // 'TR736918640040966092800056'
faker.finance.iban(true) // 'FR20 8008 2330 8984 74S3 Z620 224'
faker.finance.iban(true, 'DE') // 'DE84 1022 7075 0900 1170 01'

faker.finance.litecoinAddress() // 'MoQaSTGWBRXkWfyxKbNKuPrAWGELzcW'

faker.finance.mask() // '(...9711)'
faker.finance.mask(3) // '(...342)'
faker.finance.mask(3, false) // '...236'
faker.finance.mask(3, false, false) // '298'

faker.finance.pin() // '5067'
faker.finance.pin(6) // '213789'

faker.finance.routingNumber() // '522814402'
faker.finance.transactionDescription() // 'invoice transaction at Kilback - Durgan using card ending with ***(...4316) for UAH 783.82 in account ***16168663'
faker.finance.transactionType() // 'payment'