var selectedRow = null
var un = 0, em= 0 , pn= 0 , ge= 0 , pss= 0 ,cpss= 0;
function onFormSubmit() {
    if (checkUsername() == true && checkemail() == true && checkPhoneNumber() == true  && checkPassword() == true) {
        var formData = readFormData();
        if (selectedRow === null){
            insertNewRecord(formData);
        }else{
            updateRecord(formData);
        }
        resetForm();
        
    }
}
// function isFormValid(){
//     const inputContainers = form.querySelectorAll('.input-group');
//     let result = true;
//     inputContainers.forEach((container)=>{
//         if(container.classList.contains('error')){
//             result = false;
//         }
//     });
//     return result;
// }


function readFormData() {
    var formData = {};
    formData["username"] = document.getElementById("username").value;
    formData["email"] = document.getElementById("email").value;
    formData["number"] = document.getElementById("number").value;
    formData["gender"] = document.querySelector('input[id ="gender"]:checked').value;
    formData["password"] = document.getElementById("pass").value;
    formData["cpassword"] = document.getElementById("cpass").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("show").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.username;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.email;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.number;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.gender;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.password;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.cpassword;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = `<button onClick="onEdit(this)">Edit</button>
                       <button onClick="onDelete(this)">Delete</button>`;
}

function resetForm() {
    document.getElementById("username").value = "";
    setStatus(username);
    document.getElementById("email").value = "";
    setStatus(email)
    document.getElementById("number").value = "";
    setStatus(number)
    // document.getElementById("gender").value = "";
    document.getElementById("pass").value = "";
    setStatus(pass)
    document.getElementById("cpass").value = "";
    setStatus(cpassword)
    selectedRow = null;
   
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("username").value = selectedRow.cells[0].innerHTML;
    document.getElementById("email").value = selectedRow.cells[1].innerHTML;
    document.getElementById("number").value = selectedRow.cells[2].innerHTML;
    document.getElementById("gender").value = selectedRow.cells[3].innerHTML;
    document.getElementById("pass").value = selectedRow.cells[4].innerHTML;
    document.getElementById("cpass").value = selectedRow.cells[5].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.username;
    selectedRow.cells[1].innerHTML = formData.email;
    selectedRow.cells[2].innerHTML = formData.number;
    selectedRow.cells[3].innerHTML = formData.gender;
    selectedRow.cells[4].innerHTML = formData.password;
    selectedRow.cells[5].innerHTML = formData.cpassword;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("show").deleteRow(row.rowIndex);
        resetForm();
    }
}

// function validate() {
//     isValid = false;
//     const username = document.getElementById('username');
//     const email = document.getElementById('email');
//     const phonenumber = document.getElementById('number');
//     const gender = document.querySelector('input[id ="gender"]:checked').value;
//     const password = document.getElementById('pass');
//     const cpassword = document.getElementById('cpass');

//     const usernameValue = username.value.trim();

 
//      //validate username
//      if(usernameValue ==='') {
//        //show error msg
//        isValid = false;
//        un = 0;
//        setErrorFor(username, 'username cannot be blank');  
       
//      } else if(usernameValue.length <= 2) {
//          un = 0;
//         isValid = false;
//          setErrorFor(username,'Username more than 3 char ');
//      } else {
//          un = 1;
//         isValid = true;
//          setSuccessFor(username);
        
//      }
//      //validate email 
//      if(email.value.trim() === ""){
//          em = 0;
//         isValid = false;
//         setErrorFor(email,"cannot be blank");
//     } else if (email.type === "email") {
//         const re = /\S+@\S+\.\S+/
//         if (re.test(email.value)) {
//             isValid = true;
//             em = 1;
//           setSuccessFor(email)
          
//         } else {
//             em = 0;
//             isValid = false;
//           setErrorFor(email, "Please enter valid email address")
          
//         }
//     }
//      //validate phonenumber 
//      if(phonenumber.type === "tel" && phonenumber.value === ''){    
//             pn = 0; 
//             isValid = false;
//             setErrorFor(phonenumber,"cannot be blank");
//      }else if(phonenumber.type === "tel" && phonenumber.value.length != 10){
//             isValid = false;
//             pn = 0;
//             setErrorFor(phonenumber,"Please enter valid contact number");
//      }else {
//             pn = 1;
//             isValid = true;
//             setSuccessFor(phonenumber) 
                
//     } 
//      //validate gender
//     if(gender.type == "radio"){ 
//         var getSelectedValue = document.querySelector('input[id ="gender"]:checked');   
//             if(getSelectedValue != null) {
//                 ge = 1;
//                 isValid = true;
//                  setSuccessFor(gender)
               
//             } else {
//                 ge= 0;
//                 isValid = false;
//                 setErrorFor(gender,'please select gender');
                
//             }
//     } 
     
//     //validate password
//     if(password.id === "pass"){
//         if (password.value.trim() == "") {
//             pss = 0;
//              isValid = false;
//             setErrorFor(password, "Password  required")
           
//           } else if (password.value.length <= 3)  {
//               pss = 0;
//              isValid = false;
//             setErrorFor(password, "Password should contain minimum 3 char")
           
//           } else {
//               pss = 1;
//             isValid = true;
//             setSuccessFor(password)
            
//         } 
//     }
//     //validate confirm password
//     if(cpassword.value === ''){
//         cpss = 0;
//         isValid = false
//         setErrorFor(cpassword,'confirm password cannot be blank');  
       
//     }else if (password.value != cpassword.value) {
//         cpss =0;
//         isValid = false
//         setErrorFor(cpassword,'password is not matching');
         
//     }else {
//         cpss = 1;
//         isValid = true;
//         setSuccessFor(cpassword);
        
//     }

// return isValid; 
     
// }
//validate username
function checkUsername() {
    let un;
    username = document.getElementById('username')
    if(username.value === ''){
        setErrorFor(username,"username cannot be blanked");
        un = false;
    }else if(username.value.length <= 2){
        setErrorFor(username,"username should be minimum 3 char");
        un = false;
    }else{
        un = true;
        setSuccessFor(username)
    }
    return un;

}
//validate email
function checkemail(){
    const re = /\S+@\S+\.\S+/
    let em;
    email = document.getElementById('email')
    if(email.value === ''){
        em = false;
        setErrorFor(email,'email cannot be empty');
    }else if(re.test(email.value)){
        em = true;
        setSuccessFor(email)
    } else {
        em = false;
        setErrorFor(email, "Please enter valid email address")
                  
    }
    return em;
}
//validate phonenumber
function checkPhoneNumber(){
    let pn;
    phonenumber = document.getElementById('number');
    if(phonenumber.type === "tel" && phonenumber.value === ''){    
        pn = false; 
        setErrorFor(phonenumber,"cannot be blank");
    }else if(phonenumber.type === "tel" && phonenumber.value.length != 10){
        pn = false;
        setErrorFor(phonenumber,"Please enter valid contact number");
    }else {
        pn = true;
        setSuccessFor(phonenumber) 
                        
    }
    return pn; 
}
//validate gender
function checkGender(){
    let ge;
    if(gender.type == "radio"){
    gender = document.querySelector('input[id ="gender"]:checked').value;
    var getSelectedValue = document.querySelector('input[id ="gender"]:checked');   
    if(getSelectedValue != null ) {
        ge = true;
        setSuccessFor(gender)
    } else {
        ge= false;
        setErrorFor(gender,'please select gender');      
    }
}
    return ge

}
//validate password and confirm password 
function checkPassword(){
    password = document.getElementById('pass');
    cpassword =  document.getElementById('cpass');
    let ps;
    if(password.id === "pass"){
        if (password.value.trim() == "") {
            ps = false;
            setErrorFor(password, "Password  required")
        } else if (password.value.length <= 3)  {
            ps = false;
            setErrorFor(password, "Password should contain minimum 3 char")
        } else {
            ps = true;
            setSuccessFor(password)
        } 
    }
    if(cpassword.value === ''){
        ps = false;
        setErrorFor(cpassword,'confirm password cannot be blank');  
    }
    else if (password.value != cpassword.value) {
        ps =false;
        setErrorFor(cpassword,'password is not matching');
    }else {
        ps = true;
        setSuccessFor(cpassword);
                
    }

    return ps;
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    //add error message in small tag
    small.innerText = message;

    //adding error class
    formControl.className = 'input-group error';
}
function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'input-group success';

}
function setStatus(input) {
    const formControl = input.parentElement;
    formControl.className = 'input-group';
}
// function isEmail(email) {
//     return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
// }