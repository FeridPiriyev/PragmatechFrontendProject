class Book{
    bookName="bookname01"
    bookAuthor="Author01"
    show(){
        return this.bookAuthor
    }
}


let book=new Book()
console.log(book.bookName)