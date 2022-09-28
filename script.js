document.addEventListener("DOMContentLoaded", function() {
    let password = document.querySelector("#password").value;
    let confirmPasssword = document.querySelector("#confirm-password").value
    let error = document.querySelector("#error");

    if (password == "" && confirmPasssword == "") {
        error.textContent = "*passwords do not match";
        
    }

    else if (password === confirmPasssword) {
        error.textContent = "";
    }


   





    console.log("hi")
})