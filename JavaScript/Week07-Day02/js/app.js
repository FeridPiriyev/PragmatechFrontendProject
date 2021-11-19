class Human {
    constructor(_ad, _soyad) {
        this.ad = _ad
        this.soyad = _soyad
    }

    getFullName() {
        return `${this.ad} | ${this.soyad}`
    }

    getNameLength() {
        return this.ad.length;
    }
}


class BlackHuman extends Human {

    constructor(_ad, _soyad, _reng) {
        super(_ad, _soyad)
        this.reng = _reng
    }

    getSurnameLength() {
        return this.soyad.length
    }
}

let obj = new BlackHuman('Heci', 'Quliyev', 'Qara')

users=[
    {
        username:"admin",
        password:"admin",
        role:"admin"
    },
    {
        username:"editor",
        password:"123456",
        role:"editor"
    },
]
