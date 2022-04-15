let items = document.querySelectorAll('.item');
let container = document.querySelector('.frame');
let content = document.querySelector('.content');
let btnClose = document.querySelectorAll('.closeMe');
let hiddenText = document.querySelectorAll('.secret');


//function that enables me to select all the siblings of an element and not just the two closest to the selected element

const nextSibling = function () {
    items.forEach(item => {
        if (item.nextElementSibling !== null && !item.nextElementSibling.classList.contains('expand')) {
            item.nextElementSibling.classList.add('hidden')
        }
    })
}

const preSibling = function () {
    items.forEach(item => {
        if (item.previousElementSibling !== null && !item.previousElementSibling.classList.contains('expand')) {
            item.previousElementSibling.classList.add('hidden')
        }
    })
}

//removeHiddenClass from item
const removeHidden = function () {
    items.forEach(item => {
        item.classList.remove('hidden');
        item.classList.remove('expand');
    })
}

//show text in the open item
const showText = () => {
    hiddenText.forEach((text) => {
        text.style.display = 'block';
    });
};

//show closeMe button when item is expanded
const showBtn = () => {
    btnClose.forEach(btn => {
        btn.classList.remove('hidden')
    });
}
//hide closeMe button 
const hideBtn = () => {
    {
        btnClose.forEach(btn => {
            btn.classList.add('hidden');
        })

    }
}
//hide text in the close item
const hideText = () => {
    hiddenText.forEach((text) => {
        text.style.display = 'none';
    });
};

//open
items.forEach(item => {
    item.addEventListener('mouseup', function () {
        item.classList.add('expand');
        nextSibling();
        preSibling();
        showText();
        showBtn();
    }
    )
}
);

//close
btnClose.forEach(btn => {
    btn.addEventListener('click', function () {
        removeHidden();
        hideText();
        hideBtn();
    }
    )
});






