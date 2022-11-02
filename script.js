const varinputentertask = document.getElementById('inputentertask');
const varbtnaddtask = document.getElementById('btnaddtask');
const varenteredlistcontainer = document.getElementById('enteredlistcontainer');
const varbtnchangetheme = document.getElementById('btnchangetheme');
const varbtndeleteall = document.getElementById('btndeleteall');

varbtnchangetheme.addEventListener('click',fnchangetheme);
function fnchangetheme(){
    let element1 = document.getElementById('todolistcontainer');
    element1.classList.toggle("dark-mode");
    let element2 = document.getElementById('enteredlistcontainer');
    element2.classList.toggle("white-border");
}

varbtnaddtask.addEventListener('click',fnaddtask);
function fnaddtask(){
    if(varinputentertask.value==""){
        alert("Please enter task");
    }else{
    // alert('it is working');
    const createul = document.createElement('ul');
    const createli = document.createElement('li');
    const creatediv = document.createElement('div');
    const enteredtext = varinputentertask.value;

    const createbutton = document.createElement('button');
    const buttontext = document.createTextNode('Delete');
    createbutton.appendChild(buttontext);

    const litext = document.createTextNode(enteredtext);
    createli.append(creatediv);
    creatediv.appendChild(litext);
    creatediv.appendChild(createbutton);
    createul.appendChild(createli);

    const addclassul = createul.classList;
    addclassul.add("dynamic-ul");
    const addclassli = creatediv.classList;
    addclassli.add("dynamic-li");
    const addclassbtn = createbutton.classList;
    addclassbtn.add("dynamic-btn");

    varenteredlistcontainer.appendChild(createul);
    varinputentertask.value = "";

    createbutton.addEventListener("click",fndelete);
    function fndelete(){
        varenteredlistcontainer.removeChild(createul);
    }
    }
}