class UI {

    constructor() {

        this.profile = document.querySelector('.profile');

    }

    // Show profile

    showProfile(user) {

        this.profile.innerHTML = `

            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-3">
                        <img src="${user.avatar_url}" alt="image profile" class="img-fluid mb-3">
                        <div class="d-grid gap-2">
                            <a href="${user.html_url}" class="btn btn-primary" target="_blank">View Profile</a>
                        </div>
                    </div>
                    <div class="col-9">
                        <span class="badge bg-primary">Profile Repos : ${user.public_repos}</span>
                        <span class="badge bg-secondary">Profile Gists : ${user.public_gists}</span>
                        <span class="badge bg-success">Profile Followers : ${user.followers}</span>
                        <span class="badge bg-info">Profile Following : ${user.following}</span>

                        <ul class="list-group mt-5">
                            <li class="list-group-item">Company : ${user.company}</li>
                            <li class="list-group-item">Website / Blog : ${user.blog}</li>
                            <li class="list-group-item">Location : ${user.location}</li>
                            <li class="list-group-item">Member Since : ${user.created_at}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <h3 class="page-heading mb-3">Latest Repos</h3>
            <div id="repos"></div>

        `

    }

    // Show repos

    showRepos(repos) {

        let output = '';

        repos.forEach(repo => {

            output += `
            
                <div class="profile mt-4 mb-4">
                    <div class="card card-body">
                        <div class="row">
                            <div class="col-6">
                                <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                            </div>
                            <div class="col-6">
                                <span class="badge bg-primary">Star : ${repo.stargazers_count}</span>
                                <span class="badge bg-secondary">Watchers : ${repo.watchers}</span>
                                <span class="badge bg-success">Fork : ${repo.forks_count}</span>
                            </div>
                        </div>
                    </div>
                </div>
            
            `;

        });

        document.querySelector('#repos').innerHTML = output;

    }

    // Clear profile
    clearProfile() {

        this.profile.innerHTML = '';

    }

    // Show Alert
    showAlert(message, className) {

        this.clearAlert();

        let searchContent = document.querySelector('.searchContent');
        let search = document.querySelector('.search');
        let alert = document.createElement('div');
        alert.className = className;
        alert.textContent = message;

        searchContent.insertBefore(alert, search);

        setTimeout(() => {

            this.clearAlert()

        }, 2000);

    }

    // Clear Alert
    clearAlert() {

        let currentAlert = document.querySelector('.alert-danger');
        
        if(currentAlert) {

            currentAlert.remove();

        }

    }

}