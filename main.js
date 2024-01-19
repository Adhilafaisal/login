login=()=>{
    let username=uname.value
    let password=pswd.value
    if(!username||!password){
        alert("Invalid credentials!! Login failed!!")
    }
    else{
        localStorage.setItem("username",username)
        console.log(`Username:${username},Password:${password}`)
        window.location="dashboard.html"
    }
}