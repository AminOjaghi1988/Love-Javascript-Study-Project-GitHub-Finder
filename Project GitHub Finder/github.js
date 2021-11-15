class Github {

    constructor() {

        this.client_id = "Iv1.e63066442438d6c3";
        this.client_secret = "37ffb4e447b8423a7e11df170026c12049730aef";
        this.repos_count = 5;
        this.repos_sort = 'created: acs';

    }

    async getUser(username) {

        let responseProfile = await fetch(`https://api.github.com/users/${username}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        let responseRepos = await fetch(`https://api.github.com/users/${username}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        let profile = await responseProfile.json();
        let repos = await responseRepos.json();

        return {

            profile,
            repos

        }

    }

}