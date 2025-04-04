export class User {
    id: number; // Primary key
    name: string; // User's name
    email: string; // User's email
    password: string; // User's password
    createdAt: Date; // Timestamp when the user was created
    updatedAt: Date; // Timestamp when the user was last updated
}
