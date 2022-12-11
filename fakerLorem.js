
faker.lorem.lines() // => "Distinctio quibusdam unde nulla corrupti illum...
faker.lorem.lines()
// 'Rerum quia aliquam pariatur explicabo sint minima eos.
// Voluptatem repellat consequatur deleniti qui quibusdam harum cumque.
// Enim eveniet a qui.
// Consectetur velit eligendi animi nostrum veritatis.'

faker.lorem.lines()
faker.lorem.paragraph() // 'Animi possimus nemo consequuntur ut ea et tempore unde qui. Quis corporis esse occaecati.'
faker.lorem.paragraphs()
// 'Beatae voluptatem dicta et assumenda fugit eaque quidem consequatur. Fuga unde provident. Id reprehenderit soluta facilis est laborum laborum. Illum aut non ut. Est nulla rem ipsa.
// Voluptatibus quo pariatur est. Temporibus deleniti occaecati pariatur nemo est molestias voluptas. Doloribus commodi et et exercitationem vel et. Omnis inventore cum aut amet.
// Sapiente deleniti et. Ducimus maiores eum. Rem dolorem itaque aliquam.'
faker.lorem.paragraphs(5)
// 'Quia hic sunt ducimus expedita quo impedit soluta. Quam impedit et ipsum optio. Unde dolores nulla nobis vero et aspernatur officiis.
// Aliquam dolorem temporibus dolores voluptatem voluptatem qui nostrum quia. Sit hic facilis rerum eius. Beatae doloribus nesciunt iste ipsum.
// Natus nam eum nulla voluptas molestiae fuga libero nihil voluptatibus. Sed quam numquam eum ipsam temporibus eaque ut et. Enim quas debitis quasi quis. Vitae et vitae.
// Repellat voluptatem est laborum illo harum sed reprehenderit aut. Quo sit et. Exercitationem blanditiis totam velit ad dicta placeat.
// Rerum non eum incidunt amet quo. Eaque laborum ut. Recusandae illo ab distinctio veritatis. Cum quis architecto ad maxime a.'

// 'Eos magnam aut qui accusamus. Sapiente quas culpa totam excepturi. Blanditiis totam distinctio occaecati dignissimos cumque atque qui officiis.<br/>
// Nihil quis vel consequatur. Blanditiis commodi deserunt sunt animi dolorum. A optio porro hic dolorum fugit aut et sint voluptas. Minima ad sed ipsa est non dolores.'

faker.lorem.sentence() // 'Voluptatum cupiditate suscipit autem eveniet aut dolorem aut officiis distinctio.'
faker.lorem.sentence(5) // 'Laborum voluptatem officiis est et.'

faker.lorem.sentences() // 'Iste molestiae incidunt aliquam possimus reprehenderit eum corrupti. Deleniti modi voluptatem nostrum ut esse.'
faker.lorem.sentences(2) // 'Maxime vel numquam quibusdam. Dignissimos ex molestias quos aut molestiae quam nihil occaecati maiores.'
faker.lorem.sentences(2, '\n')
// 'Et rerum a unde tempora magnam sit nisi.
// Et perspiciatis ipsam omnis.'


faker.lorem.slug() // 'dolores-illo-est'
faker.lorem.text()
// 'Rerum eum reiciendis id ipsa hic dolore aut laborum provident.
// Quis beatae quis corporis veritatis corrupti ratione delectus sapiente ut.
// Quis ut dolor dolores facilis possimus tempore voluptates.
// Iure nam officia optio cumque.
// Dolor tempora iusto.'

faker.lorem.word() // 'temporibus'
faker.lorem.word(5) // 'velit'
faker.lorem.word({ strategy: 'shortest' }) // 'a'
faker.lorem.word({ length: { min: 5, max: 7 }, strategy: "fail" }) // 'quaerat'

faker.lorem.words() // => "corrupti provident distinctio"
faker.lorem.words() // 'qui praesentium pariatur'
faker.lorem.words(10) // 'debitis consectetur voluptatem non doloremque ipsum autem totam eum ratione'
