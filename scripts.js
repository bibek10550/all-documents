function validate(){
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username=="bibek"&& password=="sah"){
        // window.open("https://www.instagram.com/bibeksha1432/");
        // return false;
        // alert("login succesfully");
        window.open("cover.html");
//         window.location.herf="cover.html";
        // return false;
    }else{
        alert("Invalid Username or Password");
//          window.open("index.html");
        return false;
    }
}

const passInput = document.querySelector('[data-pwd-input]')
const toggleBtn = document.querySelector('[data-pwd-toggle]')

let showPassword = false

passInput.addEventListener('input', showToggleButton)
passInput.addEventListener('focus', () => {
    if (showPassword && passInput.value.length < 1) togglePasswordVisible()
})

toggleBtn.addEventListener('click', () => {
    togglePasswordVisible()
    passInput.focus()
})

function showToggleButton() {
    if (passInput.value.length > 0) toggleBtn.style.display = 'block'
    else toggleBtn.style.display = ''
}

function togglePasswordVisible() {
    showPassword = !showPassword
    if (showPassword) {
        toggleBtn.classList = 'fas fa-eye-slash'
        passInput.setAttribute('type', 'text')
    } else {
        toggleBtn.classList = 'fas fa-eye'
        passInput.setAttribute('type', 'password')
    }
}

