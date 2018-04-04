export class User {
    constructor(user) {
        this.userId = user.id;
        this.name = user.name;
        this.aboutShort = user.aboutShort;
        this.postDate = user.lastPostDate;
        this.avatarUrl = user.avatarUrl;
    }
}

// const dateFormated = user.lastPostDate.getFullYear()
const users = [{ name: "Milos" }];
const searchValue = "mil ";


users.filter(user => {
    const lowerCaseSearchValue = searchValue.toLowerCase();
    const lowerCaseName = user.name.toLowerCase()

    lowerCaseName.includes(lowerCaseSearchValue)
})