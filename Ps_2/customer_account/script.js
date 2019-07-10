const GOODS = [
    {
        category: 'furniture',
        name: 'Chair',
        amount: 1,
        price: 20
    },
    {
        category: 'supplies',
        name: 'Gel Pen',
        amount: 20,
        price: 2
    },
    {
        category: 'other',
        name: 'Trash Bin',
        amount: 1,
        price: 5
    },
    {
        category: 'furniture',
        name: 'Sofa',
        amount: 1,
        price: 50
    },
    {
        category: 'supplies',
        name: 'Notebook',
        amount: 3,
        price: 3
    },
    {
        category: 'other',
        name: 'Calendar 2019',
        amount: 1,
        price: 3
    }
];

let categoryFlag = true;
let nameFlag = true;

dataOutput(GOODS);

function dataOutput(elements) {
    let k = '<tbody>';
    let allMoney = 0;
    elements.forEach(function (element) {
        allMoney += element.price * element.amount;
        k += '<tr>';
        k += '<td>' + element.category + '</td>';
        k += '<td>' + element.name + '</td>';
        k += '<td>' + element.amount + '</td>';
        k += '<td>' + element.price + '</td>';
        k += '</tr>';
    });
    k += '</tbody>';
    document.getElementById('tableData').innerHTML = k;
    document.getElementById('total').innerHTML = allMoney + '$';
}

document.getElementById('category').addEventListener('click', sortedByCategory);

function sortedByCategory() {
    let sortedArray;
    if (categoryFlag) {
        sortedArray = GOODS.sort(function (a, b) {
            return arraySort(a.category, b.category);
        });
    } else {
        sortedArray = GOODS.sort(function (a, b) {
            return arraySort(b.category, a.category);
        });
    }
    dataOutput(sortedArray);
    categoryFlag = !categoryFlag;
}

document.getElementById('name').addEventListener('click', sortedByName);

function sortedByName() {
    let sortedArray;
    if (nameFlag) {
        sortedArray = GOODS.sort(function (a, b) {
            return arraySort(a.name, b.name);
        });
    } else {
        sortedArray = GOODS.sort(function (a, b) {
            return arraySort(b.name, a.name);
        });
    }
    dataOutput(sortedArray);
    nameFlag = !nameFlag;
}

function arraySort(a, b) {
    if (a > b) {
        return 1;
    }
    if (a < b) {
        return -1;
    }
    return 0;
}

document.getElementById('search').addEventListener('change', Search);

function Search() {
    console.log("ok")
    let string = document.getElementById('search').value + '*';
    let array = [];
    GOODS.forEach(function (element) {
        if (new RegExp('\^'+string, 'gi').test(element.name)) {
            array.push(element);
        }
    });
    dataOutput(array)
}