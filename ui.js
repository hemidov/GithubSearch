

class Ui {
    constructor() {
        this.cardBody = document.querySelector(".card-body");
        this.fieldInput = document.getElementById("githubname");
        this.profileDiv = document.getElementById("profile");
        this.repoDiv = document.getElementById("repos");
        this.lastUsers = document.getElementById("last-users")
    }

    shovError(message) {
        let div = document.createElement("div");
        div.className = "alert alert-danger";
        div.textContent = message;
        this.cardBody.appendChild(div);

        setTimeout(() => {
            div.remove()

        }, 2000)


    }
    clearInput() {
        this.fieldInput.value = "";

    }

    shovInfoUser(user) {

        let arr = Storage.getStorage();

        if (arr.indexOf(user) === -1) {



            this.profileDiv.innerHTML += `
        <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-4">
            <a href="${user.html_url}" target = "_blank">
             <img class="img-fluid mb-2" src="${user.avatar_url}"> </a>
             <hr>
             <div id="fullName"><strong>${user.name} </strong></div>
             <hr>
             <div id="bio">${user.bio}</div>
            </div>
          <div class="col-md-8">
                <button class="btn btn-secondary">
                      Followers  <span class="badge badge-light">${user.followers}</span>
                </button>
                <button class="btn btn-info">
                     Folowing  <span class="badge badge-light">${user.following}</span>
                  </button>
                <button class="btn btn-danger">
                    Repos  <span class="badge badge-light">${user.repos_url}</span>
                </button>
                <hr>
                <li class="list-group">
                    <li class="list-group-item borderzero">
                        <img src="images/company.png" width="30px"> <span id="company"> ${user.company}</span>
                        
                    </li>
                    <li class="list-group-item borderzero">
                        <img src="images/location.png" width="30px"> <span id = "location">${user.location}</a>
                        
                    </li>
                    <li class="list-group-item borderzero">
                        <img src="images/mail.png" width="30px"> <span id="company">${user.email}</span>
                        
                    </li>
                    
                </div>
                    
          </div>
    </div>
     
     
        `
        }
    }
    shovInfoRepo(repos) {
        
        let arr = Storage.getStorage();

        if (arr.indexOf(repos) === -1) {



            this.repoDiv.innerHTML = "";
            repos.forEach(repo => {
                this.repoDiv.innerHTML += `
            <div class="mb-2 card-body">
            <div class="row">
                <div class="col-md-2">
                <span></span> 
                <a href="${repo.html_url}" target = "_blank" id = "repoName">${repo.name}</a>
                </div>
                <div class="col-md-6">
                    <button class="btn btn-secondary">
                        Stars  <span class="badge badge-light" id="repoStar">${repo.stargazers_count}</span>
                    </button>
    
                    <button class="btn btn-info">
                        Forks  <span class="badge badge-light" id ="repoFork">${repo.forks_count}</span>
                    </button>
            
                </div>
        </div>
    
        </div>`


            });

        }
    }

        addSearchedUserToUi(params) {

            let arr = Storage.getStorage();
            if (arr.indexOf(params) === -1) {
                let li = document.createElement("li");
                li.className = "list-group-item";
                li.textContent = params;
                this.lastUsers.appendChild(li);
            }
            // this.lastUsers.innerHTML += `
            // <li class="list-group-item">${params}</li>
            // `



        }

    deleteForm() {
        this.profileDiv.innerHTML="";
        this.repoDiv.innerHTML="";
    }
}