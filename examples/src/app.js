class User
{
    constructor()
    {
        this.name = "username";
        this.score = 10;
        this.email = "test@test.com";
        this.dateOfBirth = new Date();
        this.password = "50m3P455w0rd!";
        this.isActive = false;
    }
}

export class App
{
    constructor(){
        this.user = new User();
    }
}