import { Injectable } from '@nestjs/common';

interface User {
  id: number;
  name: string;
  age: number;
  phone: string;
}

@Injectable()
export class UserStore {
  private store = new Map<number, User>();

  addUser(user: User) {
    this.store.set(user.id, user);
  }

  getUserById(id: number) {
    return this.store.get(id);
  }

  updateUser(id: number, user: User) {
    return this.store.set(id, user);
  }
  deleteUser(id: number) {
    this.store.delete(id);
  }

  getUsers() {
    return Array.from(this.store).map((_, item) => item);
  }
}
