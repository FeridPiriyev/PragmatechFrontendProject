users=[]
_id=1
function addUser(_name,_surname){
    users.push({
        u_id:_id,
        u_name:_name,
        u_surname:_surname
    })

    _id++
}

function submitUserData(e){
    e.preventDefault()
    let name=document.querySelector("#name")
    let surname=document.querySelector("#surname")
    addUser(name.value,surname.value)
    console.log(users)
    showUserData()
}

let tbody = document.querySelector('tbody');

// function showUserData(){   
   
//     tbody.innerHTML='';

//     for (let i=0;i<users.length;i++){
//         let tr=`
//     <tr>
//         <td>${users[i].u_id}</td>
//         <td>${users[i].u_name}</td>
//         <td>${users[i].u_surname}</</td>
//         <td>
//             <a href="" class="btn btn-primary">Delete</a>
//             <a href="" class="btn btn-primary">Update</a>
//         </td>
//     </tr>
//     `
//     tbody.innerHTML+=tr
//     }
// }

function showUserData(){   
   

    let tr=`
    <tr>
        <td>${users[users.length-1].u_id}</td>
        <td class='u_name'>${users[users.length-1].u_name}</td>
        <td class='u_surname'>${users[users.length-1].u_surname}</</td>
        <td>
            <a href="#" class="btn btn-primary" onclick='deleteUser(this,${users[users.length-1].u_id},event)'>Delete</a>
            <a href="#" class="btn btn-primary" onclick='updateUser(this)'>Edit</a>
        </td>
    </tr>
    `
    tbody.innerHTML+=tr
}

function deleteUser(item, id, e) {
    e.preventDefault()
    for (let i in users) {
        if (users[i].u_id == id) {
            users.splice(i, 1);
        }
    }

    tbody.removeChild(item.parentElement.parentElement)
}


function updateUser(element,e){

}

