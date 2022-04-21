class BookManager{
    constructor() {
        this.books=[];
    }
    showListBook(){
        let html=''
        if (this.books.length === 0) {
            html += '<tr>';
            html += '<td colspan="5">No data</td>';
            html += '</tr>';
        }
        else{
            for (let i = 0; i < this.books.length; i++) {
                html+=`<tr>
                   <td></td>
                   <td>${this.books[i].getCode()}</td>
                   <td>${this.books[i].getName()}</td>
                   <td>${this.books[i].getYear()}</td>
                   <td>${this.books[i].getQuantity()}</td>
                   <td>${this.books[i].status}</td>`;
            }
        }
        document.getElementById('list-book').innerHTML=html;
    }

    add(code,name,year,quantity){
        let book=new Book();
        this.books.push(book);
        this.showListBook();
        this.clearInput();
    }

    clearInput(){
        document.getElementById('code').innerHTML='';
        document.getElementById('name').innerHTML='';
        document.getElementById('year').innerHTML='';
        document.getElementById('quantity').innerHTML='';
    }
}