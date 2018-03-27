export class Post {
    constructor(post) {
        this.authorId = post.userId;
        this.id = post.id;
        this.userName = post.userDisplayName;
        this.type = post.type;
    }

}