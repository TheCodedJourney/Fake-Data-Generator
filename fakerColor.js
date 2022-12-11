
faker.color.cmyk() // [0.31, 0.52, 0.32, 0.43]
faker.color.cmyk({ format: 'decimal' }) // [0.31, 0.52, 0.32, 0.43]
faker.color.cmyk({ format: 'css' }) // cmyk(100%, 0%, 0%, 0%)
faker.color.cmyk({ format: 'binary' }) // (8-32 bits) x 4

faker.color.colorByCSSColorSpace() // => [0.5488,0.5929,0.7152]
faker.color.colorByCSSColorSpace({ format: 'decimal' }) // [0.12, 0.21, 0.31]
faker.color.colorByCSSColorSpace({ format: 'css', space: 'display-p3' }) // color(display-p3 0.12 1 0.23)
faker.color.colorByCSSColorSpace({ format: 'binary' }) // (8-32 bits x 3)

faker.color.cssSupportedFunction() // => "hwb"
faker.color.cssSupportedSpace() // => "a98-rgb"

faker.color.hsl() // => [198,0.59,0.72]
faker.color.hsl({ format: 'decimal' }) // [300, 0.21, 0.52]
faker.color.hsl({ format: 'decimal', includeAlpha: true }) // [300, 0.21, 0.52, 0.28]
faker.color.hsl({ format: 'css' }) // hsl(0deg, 100%, 80%)
faker.color.hsl({ format: 'css', includeAlpha: true }) // hsl(0deg 100% 50% / 0.5)
faker.color.hsl({ format: 'binary' }) // (8-32 bits) x 3
faker.color.hsl({ format: 'binary', includeAlpha: true }) // (8-32 bits) x 4

faker.color.human() // => "salmon"
faker.color.hwb() // [201, 0.21, 0.31]
faker.color.hwb({ format: 'decimal' }) // [201, 0.21, 0.31]
faker.color.hwb({ format: 'css' }) // hwb(194 0% 0%)
faker.color.hwb({ format: 'binary' }) // (8-32 bits x 3)

faker.color.lab() // => [0.548814,18.5689,43.0379]
faker.color.lab({ format: 'decimal' }) // [0.856773, -80.2345, 100.2341]
faker.color.lab({ format: 'css' }) // lab(29.2345% 39.3825 20.0664)
faker.color.lab({ format: 'binary' }) // (8-32 bits x 3)

faker.color.lch() // => [0.548814,136.4,164.5]
faker.color.lch({ format: 'decimal' }) // [0.522345, 72.2, 56.2]
faker.color.lch({ format: 'css' }) // lch(52.2345% 72.2 56.2)
faker.color.lch({ format: 'binary' }) // (8-32 bits x 3)

faker.color.rgb() // => "#cdfcdc"
faker.color.rgb({ prefix: '#' }) // '#ffffFF'
faker.color.rgb({ casing: 'upper' }) // '0xFFFFFF'
faker.color.rgb({ casing: 'lower' }) // '0xffffff'
faker.color.rgb({ prefix: '#', casing: 'lower' }) // '#ffffff'
faker.color.rgb({ format: 'hex', casing: 'lower' }) // '#ffffff'
faker.color.rgb({ format: 'decimal' }) // [255, 255, 255]
faker.color.rgb({ format: 'css' }) // 'rgb(255, 0, 0)'
faker.color.rgb({ format: 'binary' }) // '10000000 00000000 11111111'
faker.color.rgb({ format: 'decimal', includeAlpha: true }) // [255, 255, 255, 0.4]

faker.color.space() // => "sYCC"