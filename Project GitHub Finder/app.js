let github = new Github();

let ui = new UI();



// Search Input

let searchInput = document.querySelector('#searchUser');



// Add Event Listener

searchInput.addEventListener('keyup', (e) => {

    let username = e.target.value;

    // console.log(username);

    if(username !== '') {

        // Get profile from git

        github.getUser(username).then(data => {

            // console.log(data);

            if(!data.profile.message) {

                // Show Profile in webpage

                ui.showProfile(data.profile);
                ui.showRepos(data.repos);

            } else {

                // Show Alert
                ui.showAlert('User Not Found...', 'alert alert-danger');

            }

        });

    } else {

        // Clear profile from webpage
        
        ui.clearProfile();

    }

});