function login() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    document.getElementById("result-title").innerHTML = "Name: " + name + ", Email: " + email;
}