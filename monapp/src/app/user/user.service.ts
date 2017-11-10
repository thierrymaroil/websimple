import { Injectable } from '@angular/core';
import { IUser } from '../../types/IUser.interface';



@Injectable()



export class UserService {
    user: IUser;

    constructor() {
        this.user = { login: 'thierry', password: 'test' };
       }
        signInUser(user: IUser): boolean {
          return (user.login === this.user.login && user.password === this.user.password );
    }
}
