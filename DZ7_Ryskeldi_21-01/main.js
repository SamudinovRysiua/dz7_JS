class Cars {
    static  type = 'Car'

    constructor(options) {
        this.model = options.model
        this.color = options.color
        this.wheels = options.wheels
    }
    start() {
        console.log('Машина готова рвать этих японцев')
    }
}

class Mercedes extends Cars {
    static type = "German"

    constructor(options) {
        super(options);
        this.engine = options.engine
    }
}

const mercedes = new Mercedes({
    model: 'mercedes w140',
    color: 'black',
    wheels: 4,
    engine: 'turbo 7.3 V16'
})
console.log(mercedes)
mercedes.start()

class Audi extends Cars {
    static type = 'German'

    constructor(options) {
        super(options);
        this.engine = options.engine
    }
    start() {
        console.log('Машина готова рвать японцев :)')
    }
}
const audi = new Audi({
    model: 'Audi RS7',
    color: 'Gray',
    wheels: 4,
    engine: 'twin-turbo 4.0-liter V-8'
})
console.log(audi)
audi.start()

class BMW extends Cars {
    static type = 'German'

    constructor(options) {
        super(options);
        this.engine = options.engine
    }
    start() {
        console.log('Машина готова рвать японцев :)')
    }
}
const bmw = new BMW({
    model: 'BMW m5 competition',
    color: 'Blue',
    wheels: 4,
    engine: 'BMW M-TwinPower Turbo 4.4 V8'
})
console.log(bmw)
audi.start()