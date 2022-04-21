class Book {
    constructor(code, name, year, quantity) {
        this.code = code;
        this.name = name;
        this.year = year;
        this.quantity = quantity;
        this.status=true;
    }

    getName() {
        return this.name;
    }

    getCode() {
        return this.code;
    }

    getYear() {
        return this.year;
    }

    getQuantity() {
        return this.quantity;
    }
}