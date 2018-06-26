
export class User {
  constructor(public email: string, public password: string, public username: string) {};
}

export class CreateUser {
  static create(event: User) {
    return new User(event.email, event.password, event.username);
  }
}
