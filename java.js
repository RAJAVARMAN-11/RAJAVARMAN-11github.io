let n=document.getElementById("name");
let r=document.getElementById("Register");
let e=document.getElementById("email");
let d=document.getElementById("Department");
let a=document.getElementById("add");
let c=0;
let st=true;

var tables = document.getElementById("mytable");
document.getElementById("add").addEventListener("click", (u)=>   
    {   
    if(n.value===''||r.value===''||e.value===''||d.value==='')
    {
        st=false;
    }
    if(st==false)
    {
       alert("Fill all the Fields!!");
       st=true;
    }
    else{
    c++;
     u.preventDefault();
    let p=document.createElement('tr');
    p.setAttribute("class","parent");
    let c1=document.createElement("td");
    let c2=document.createElement("td");
    let c3=document.createElement("td");
    let c4=document.createElement("td");
    let c5=document.createElement("td");
    c1.setAttribute("class","c1");
    c2.setAttribute("class","c2");
    c3.setAttribute("class","c3");
    c4.setAttribute("class","c4");
    c5.setAttribute("id","c5");
    p.appendChild(c1);
    p.appendChild(c2);
    p.appendChild(c3);
    p.appendChild(c4);
    p.appendChild(c5);
    document.getElementById('table1').appendChild(p);
    c1.innerHTML=n.value;
    c2.innerHTML=r.value;
    c3.innerHTML=e.value;
    c4.innerHTML=d.value;
    c5.innerHTML+=`<button id="but" onclick="delfun(event)" >DELETE</button>`;
    c5.innerHTML+=`<button id="edit" onclick="editfun(event)" >EDIT</button>`;
    n.value="";
    r.value="";
    e.value="";
    d.value="";
    }

})
function delfun(event)
{
    event.target.parentElement.parentElement.remove();
}
function editfun(event)
{  
    event.target.parentElement.parentElement.contentEditable=true;
   console.log( event.target.parentElement);
   event.target.parentElement.innerHTML=`<button id="but" onclick="delfun(event)" >DELETE</button><button id="edit" onclick="save(event)" >SAVE</button>`;
}
function save(event)
{
    event.target.parentElement.parentElement.contentEditable=false;
    event.target.parentElement.innerHTML=`<button id="but" onclick="delfun(event)" >DELETE</button><button id="edit" onclick="editfun(event)" >EDIT</button>`;
}
function strt(){
    let p=document.createElement('tr');
    p.setAttribute("class","par");
    let c1=document.createElement("th");
    let c2=document.createElement("th");
    let c3=document.createElement("th");
    let c4=document.createElement("th");
    let c5=document.createElement("th");
    c1.setAttribute("class","cc1");
    c2.setAttribute("class","cc2");
    c3.setAttribute("class","cc3");
    c4.setAttribute("class","cc4");
    c5.setAttribute("class","cc5");
    p.appendChild(c1);
    p.appendChild(c2);
    p.appendChild(c3);
    p.appendChild(c4);
    p.appendChild(c5);
    document.getElementById('mytable').appendChild(p);
    c1.innerHTML="NAME";
    c2.innerHTML="REG.NO";
    c3.innerHTML="EMAIL";
    c4.innerHTML="DEPARTMENT";
    c5.innerHTML="ACTION"
}