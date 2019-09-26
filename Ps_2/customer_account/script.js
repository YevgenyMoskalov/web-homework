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
let clickNameFlag = false;
let clickCategoryFlag = false;

displayTable();

document.getElementById('search').addEventListener('input', displayTable);
document.getElementById('select-category').addEventListener('change', displayTable);
document.getElementById('name').addEventListener('click', () => {
    clickNameFlag = true;
    displayTable();
    clickNameFlag = false
});
document.getElementById('category').addEventListener('click', () => {
    clickCategoryFlag = true;
    displayTable();
    clickCategoryFlag = false
});


function displayTable() {
    let str = document.getElementById('search').value;
    let category = document.getElementById('select-category').value;
    let tempArray = GOODS;

    if (str !== "") {
        tempArray = search(tempArray, str)
    }
    filterByCategory(tempArray, category);

}

function search(elements, tempRegex) {
    let array = [];
    let reg = new RegExp('^' + tempRegex, 'i');

    elements.forEach(function (element) {
        if (reg.test(element.name)) {
            array.push(element);
        }
    });
    elements = array;
    return elements
}

/**
 *
 * @param elements
 * @param category
 */
function filterByCategory(elements, category) {
    if (category !== "") {
        let array = [];
        elements.forEach(function (element) {
            console.log(element.category);
            if (element.category === category) {
                array.push(element);
            }
        });
        elements = array;

    }
    if (clickCategoryFlag) {
        sortedByCategory(elements)
    } else if (clickNameFlag) {
        sortedByName(elements)
    }
    drawTable(elements)
}

function sortedByCategory(elements) {
    let sortedArray;
    if (categoryFlag) {
        sortedArray = elements.sort(function (a, b) {
            return arraySort(a.category, b.category);
        });
    } else {
        sortedArray = elements.sort(function (a, b) {
            return arraySort(b.category, a.category);
        });
    }
    drawTable(sortedArray);
    categoryFlag = !categoryFlag;
}

function sortedByName(elements) {
    let sortedArray;
    if (nameFlag) {
        sortedArray = elements.sort(function (a, b) {
            return arraySort(a.name, b.name);
        });
    } else {
        sortedArray = elements.sort(function (a, b) {
            return arraySort(b.name, a.name);
        });
    }
    drawTable(sortedArray);
    nameFlag = !nameFlag;
}

function drawTable(elements) {
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

function arraySort(a, b) {
    if (a > b) {
        return 1;
    }
    if (a < b) {
        return -1;
    }
    return 0;
}