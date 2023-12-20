import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/User';
@Injectable({
    providedIn: 'root'
})
export class UserService {
    message: string = "";
    token = "";
    id: number = 0;
    constructor(private http: HttpClient) { }
    register(user: User) {
        console.log("Inside user service : " + User);
 
        return this.http.post("http://localhost:8080/api/public/register", user);
    }
    login(user: User) {
        return this.http.post("http://localhost:8080/api/public/login", user);
    }
 
    clear() {
        localStorage.clear();
    }
    setId(id: number) {
        this.id = id;
    }
    // changePassword(user: User) {
    //     return this.http.put("", user); // remaining
    // }
    // removeUser(id: number) {
    //     return this.http.delete(`${this.BASE_URL}/`);// remaining
    // }
    // updateProfile(id: number, user: User) {
    //     return this.http.put("", user); // remaining
    // }
    isLogedIn() {
        return localStorage.getItem('token') != null;
    }
    user: User = new User();
    role = "";
    checkRole() {
        let token = localStorage.getItem('token');
        let role = localStorage.getItem('role'); if (role != null && token != null) {
            return role;
        } else {
            return "";
        }
    }
    setToken(token: string) {
        //   alert("Userservice setToken function :" + token)
        localStorage.setItem('token', token);
    }
    getToken() {
        return localStorage.getItem('token');
    }
    deleteToken() {
        localStorage.removeItem('token');
    }
    setRoles(roles: []) {
        localStorage.setItem('roles', JSON.stringify(roles));
    }
    getRoles() {
        return localStorage.getItem('roles');
    }
    getId() {
        return this.id;
    }
}