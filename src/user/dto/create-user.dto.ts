export class CreateUserDto {
    name: string; // User's name
    email: string; // User's email
    password: string; // User's password
    createdAt: Date; // Timestamp when the user was created
    updatedAt: Date; // Timestamp when the user was last updated
    constructor(name: string, email: string, password: string) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
}
