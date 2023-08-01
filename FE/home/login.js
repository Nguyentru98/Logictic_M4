function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
        LoginCheck(username, password)
            .then((token) => {
                if(token === "User is not exist" || token === "Password is wrong") {
                    alert('Đăng nhập không thành công');
                }
                else {
                    console.log(1)
                    // Lưu trữ token vào localStorage hoặc sessionStorage
                    localStorage.setItem('token', token);
                    // Hoặc sessionStorage.setItem('token', token);
                    ListProduct();
                }
            })
            // .catch((error) => {
            //     console.error(error);
            //     alert('Đăng nhập thất bại');
            // });

}

function loadLogin() {
    const string = `
        <div class="row new-account-login">
            <div class="col-sm-6 col-lg-6 mb-3">
                <div class="title-left">
                    <h3>Account Login</h3>
                </div>
                <h5><a data-toggle="collapse" href="#formLogin" role="button" aria-expanded="false">Click to Login</a></h5>
                <div class="mt-3 collapse review-form-box" id="formLogin" onsubmit="event.preventDefault(); login()">
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="username" class="mb-0">User Name</label>
                            <input type="text" class="form-control" id="username" placeholder="Enter "> </div>
                        <div class="form-group col-md-6">
                            <label for="password" class="mb-0">Password</label>
                            <input type="password" class="form-control" id="password" placeholder="Password"> </div>
                    </div>
                    <button onclick="login()" class="btn hvr-hover">Login</button>
                    
                </div>
            </div>
            <div class="col-sm-6 col-lg-6 mb-3">
                <div class="title-left">
                    <h3>Register</h3>
                </div>
                <h5><a data-toggle="collapse" href="#formRegister" role="button" aria-expanded="false" onclick="loadRegister()">Click to Register</a></h5>
                <form class="mt-3 collapse review-form-box" id="formRegister">
                    <div id="Register"></div>
                </form>
            </div>
        </div>
    `;
    document.getElementById('listProduct').innerHTML = string;
}


async function LoginCheck(username, password) {
    console.log(username,password)
    try {

        const response = await axios.post('http://localhost:3000/login', {
            username : username,
            password : password });




        const token = response.data;
        // Thay "response.data" bằng cách truy cập đúng vào thuộc tính chứa token
        if(token === "userkhongtontai"){
            return alert("dang nhap ko thanh cong")

        }else {
            return token;
        }
    } catch (error) {
        console.error(error);
        throw new Error('Error logging in');
    }
}