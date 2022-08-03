// button new Managers
let tokenBTNnewObject = 0;
let BTNnewObject = document.querySelector('#BTNnewObject').addEventListener('click', () => 
{
    tokenBTNnewObject++
    if(tokenBTNnewObject <= 6)
    {
    let listItemsCreate = document.querySelector('#listItemsCreate');
    let listItems = document.createElement("textarea");
    listItems.spellcheck = false;
    listItemsCreate.appendChild(listItems);
    } else
    {
        alert('Maximo de lembretes !!')
    }
    let textarea = document.querySelector("textarea");
    // listItems.appendChild(document.createTextNode(''));

});

// let editDivs = document.querySelector("div").addEventListener('click',() => {
//     alert('hello')
// })
