const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting")
const USERNAME_KEY = "username";
const HIDDEN_CLASSNAME = "hidden";


function onLoginSubmit(event){
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings();

}


/**로그아웃**/
function out(event){
    /**event.preventDefault();**/
    localStorage.clear();

    
    
    
}




const outBtn = document.getElementById("logOut");
outBtn.addEventListener("click",out);
outBtn.classList.add(HIDDEN_CLASSNAME);





function paintGreetings(){
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText =`안녕하세요 ${username} 님`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    beforeLogin.classList.remove(HIDDEN_CLASSNAME);
    outBtn.classList.remove(HIDDEN_CLASSNAME);
    

}


const saveUsername = localStorage.getItem(USERNAME_KEY);

if (saveUsername ===null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
}else{
    paintGreetings();
   
}