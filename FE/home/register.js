function loadRegister(){
    let str = `<div class="form-row">
    
    <div class="form-group col-md-6">
        <label for="username" class="mb-0">User Name</label>
        <input type="text" class="form-control" id="username"> </div>
    <div class="form-group col-md-6">
        <label for="pas sword" class="mb-0">Password</label>
        <input type="password" class="form-control" id="password"> </div>
</div>
<button onclick="Register()" class="btn hvr-hover">Register</button>`;
    document.getElementById("Register").innerHTML = str
}

function Register(){
    let data = {
        username : document.getElementById("username").value,
        password : document.getElementById('password').value,
    }
    console.log(data);


    axios.post('http://localhost:3000/register', data)
        .then(function (response) {
            // Registration successful, redirect to login page
            loadLogin();
        })
        .catch(function (error) {
            // Registration failed, display an error message
            console.error("Registration failed. Error: " + error.response.data);
            // You can display an error message on the page or handle it in any other way
        });

}