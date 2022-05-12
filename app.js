let githubForm = document.getElementById("github-form");
let githubName = document.getElementById("githubname");
let clearLastUsers = document.getElementById("clear-last-users");

let clerAll = document.getElementById("clear-last-users");
let lastUsers=document.getElementById("last-users")

let github = new Github();
let ui = new Ui();

addEventListener();

function addEventListener() {
    githubForm.addEventListener("submit", getData);
    clerAll.addEventListener("click", sil)
    // clearLastUsers.addEventListener("click", deleteLastUsers);
    // document.addEventListener("DOMContentLoaded", getAllSeached)
    document.addEventListener("DOMContentLoaded", dom);
    



}

function getData(e) {
    let username = githubName.value.trim();

    if (username === "") {
        alert("Plase add username")
    }
    else {

        github.getGithubData(username)
            .then(response => {

                if (response.user.message === "Not Found") {
                    ui.shovError("This username is not base")

                }
                else {
                    ui.addSearchedUserToUi(username);// son daxil edilen adlari ekrana verir
                    ui.shovInfoUser(response.user);// ekrana user getrir
                    ui.shovInfoRepo(response.repo);// ekrana repo getirir
                    Storage.setStorage(username);// localstorageye elave edir


                }

            })
            .catch(err => console.log(err))
    }


    ui.clearInput()

    e.preventDefault()
}

function dom() {
    
    let a = Storage.getStorage();
//   a.forEach(function (todo) {
//     ui.shovInfoUser(todo);
//   });
    let result = "";
    a.forEach((e) => {
        result += `
        <li class="list-group-item">${e}</li>
        `
    })

    lastUsers.innerHTML = result;
}



function sil(){
  
    ui.deleteForm();
    localStorage.clear();
    lastUsers.innerHTML = "";



}



