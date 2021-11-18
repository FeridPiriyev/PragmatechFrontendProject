function createObject(_ad,_soyad){
    return {
        name:_ad,
        surname:_soyad,
        show:function(){
        return `${this.name} sen bomba oglansan`
        }
    }
}
let obj=createObject('Naile','Gulsumova')
function objectConstructor(_ad){
 this.name=_ad
}

// new ={}

class Book{
    constructor(_ad,_soyad){
        this.name=_ad
        this.surname=_soyad
    }
    show(){
        return `${this.name} sen bomba oglansan`
    }
}

let obj03=new Book('sibumi','Mr.Hell')
