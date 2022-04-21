let bookmanager=new BookManager();
bookmanager.showListBook();

function save(){
    let code=document.getElementById('code').value;
    let name=document.getElementById('name').value;
    let year=document.getElementById('year').value;
    let quantity=document.getElementById('quantity').value;

    bookmanager.add(code,name,year,quantity);
}