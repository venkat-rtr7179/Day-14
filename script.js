const form = document.querySelector("form");
let count = 0;
let arr = [];
form.addEventListener("submit",function(e){
    e.preventDefault()
var container = document.querySelectorAll("input[type='checkbox']");
count = 0;
   arr.length = 0;

for(let i=0;i<container.length;i++) {
    if(container[i].checked==true) {
        count++;
    }
}
if(count>=2) {
    
    for(let i=0;i<container.length;i++) {
    if(container[i].checked==true) {
        arr.push(container[i].value);
    }
 
}

var trr = document.createElement("tr");
   for(i=0;i<8;i++) {
        const tdd = document.createElement("td");
        tdd.innerHTML ="td"+parseInt(i+1);
        trr.append(tdd)
    }
    createRow();

    
}
else {
    alert("please select atleast two options")

}


})


function createRow(){
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    td1.textContent = document.getElementById("first-name").value;
    
    const td2 = document.createElement("td");
    td2.textContent = document.getElementById("last-name").value;
    
    const td3 = document.createElement("td");
    td3.textContent = document.getElementById("address").value;
    
    const td4 = document.createElement("td");
    td4.textContent = document.getElementById("pincode").value;

    const td5 = document.createElement("td");
    const male = document.getElementById("male");
    
    if(male.checked == true) {
        td5.textContent = "Male"
    
    }
    else {
        td5.textContent = "Female"
    
    }

    const td6 = document.createElement("td");
    td6.textContent = arr.join(",");
    
    const td7 = document.createElement("td");
    td7.textContent = document.getElementById("state").value

    const td8 = document.createElement("td");
    td8.textContent = document.getElementById("country").value

    tr.append(td1);
    tr.append(td2);
    tr.append(td3);
    tr.append(td4);
    tr.append(td5);
    tr.append(td6);
    tr.append(td7);
    tr.append(td8);

    document.getElementById("tbody").appendChild(tr);
    form.reset();

    
}