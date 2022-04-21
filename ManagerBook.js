class Managebook {
    constructor(Booknumber, Namebook, YearBook, Number, Status) {
        this._Booknumber = Booknumber;
        this._Namebook = Namebook;
        this._YearBook = YearBook;
        this._Number = Number;
        this._Status = Status;
    }
}
let n = -1;

function save() { //tao ra 1 nut bam onclick vao day voi id: save


    let Booknumber = document.getElementById('booknumber').value;
    let Namebook = document.getElementById('namenumber').value;
    let YearBook = document.getElementById('yearBook').value;
    let Number = document.getElementById('number').value;
    let Status = document.getElementById('status').value;

    let managebook = new Managebook(Booknumber, Namebook, YearBook, Number, Status);

    let currentData = loadLocalStorage();

    if (!currentData) {
        let arr = [];
        arr.push(managebook);
        saveLocalStorage(arr);
    } else {
        if (n === -1) {
            currentData.push(managebook);
            saveLocalStorage(currentData);
        } else {
            currentData[n] = managebook;
            saveLocalStorage(currentData);
            n = -1;
        }
    }
    showManagebook();
}
function showManagebook() {
    let data = loadLocalStorage();
    let a = ''
    if (data) {
        let arr = [];
        for (let i = 0; i < data.length; i++) {
            a += '<tr>'
            a += `<td>${i + 1}</td>`
            a += `<td>${data[i]._Booknumber}</td>`
            a += `<td>${data[i]._Namebook}</td>`
            a += `<td>${data[i]._YearBook}</td>`
            a += `<td>${data[i]._Number}</td>`
            a += `<td>${data[i]._Status}</td>`
            a += `<td><button onclick="editManagebook(${i})">Edit</button></td>`
            a += `<td><button onclick="deleteManagebook(${i})">Delete</button></td>`
            a += '</tr>'
        }
    }
    document.getElementById('list').innerHTML = a;
}

function saveLocalStorage(data) {
    localStorage.setItem('Menu', JSON.stringify(data));
}

function loadLocalStorage() {
    return JSON.parse(localStorage.getItem('Menu'));
}

showManagebook();
function editManagebook(x) {
    let data = loadLocalStorage();
    n = x;
    document.getElementById('booknumber').value = data[n]._Booknumber;
    document.getElementById('namenumber').value = data[n]._Namebook;
    document.getElementById('yearBook').value = data[n]._YearBook;
    document.getElementById('number').value = data[n]._Number;
    document.getElementById('status').value = data[n]._Status;
}

function deleteManagebook(managebook) {
    let data = loadLocalStorage();
    confirm("bạn chắc chứ")
    data.splice(managebook, 1);
    saveLocalStorage(data);
    showManagebook();
}