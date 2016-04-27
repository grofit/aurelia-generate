class User
{
    constructor()
    {
        this.name = "someUsername";
        this.score = 10;
        this.email = "test@test.com";
        this.dateOfBirth = new Date();
        this.password = "50m3P455w0rd!";
        this.isActive = true;
    }
}

export class App
{
    constructor(){
        this.user = new User();
    }
}