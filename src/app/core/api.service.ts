import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer, User } from '../app.component';
import { environment } from 'src/environments/environment.development';
@Injectable({
    providedIn: 'root'
})
export class ApiService {

    serverUrl = environment.serverUrl; //'http://localhost:3000/'

    // private token = ''
    private TOKEN_KEY = 'token'
    private EMAIL_KEY = 'email'

    setToken(value: string) {
        localStorage.setItem(this.TOKEN_KEY, value);
    }

    getToken(): string {
        return localStorage.getItem(this.TOKEN_KEY) || '';
        // return this.token
    }
     setEmail(value: string) {
        localStorage.setItem(this.EMAIL_KEY, value);
    }

    getEmail(): string {
        return localStorage.getItem(this.EMAIL_KEY) || '';
        // return this.token
    }

    deleteToken() {
        localStorage.removeItem(this.TOKEN_KEY);
    }
    deleteEmail() {
        localStorage.removeItem(this.EMAIL_KEY);
    }

    constructor(private http: HttpClient) { }

   
    GET<DynamicType>(endpoint: string): Observable<DynamicType> {
        return this.http.get<DynamicType>(
            `${this.serverUrl}${endpoint}`,
            {
                headers: {
                    'x-auth-token': this.getToken()
                }
            }
        )
    }

    POST<DynamicType>(endpoint: string, data: DynamicType): Observable<DynamicType> {
        return this.http.post<DynamicType>(
            `${this.serverUrl}${endpoint}`,
            data,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': this.getToken()
                }
            }
        )
    }

   
    signup(user: User): Observable<User> {
        return this.POST<User>('users/signup', user);
    }

    login(user: User): Observable<User> {
        return this.POST<User>('users/login', user);
    }
    logout(user: User): Observable<User> {
        return this.POST<User>('users/logout', user);
    }
     getOneCustomer(id: string): Observable<Customer> {
        return this.GET<Customer>(`customers/${id}`);
    }
     getUser(): Observable<User> {
        return this.GET<User>(`users/token`);
    }
    getCustomer(): Observable<Array<Customer>> {
        return this.GET<Array<Customer>>(`customers`);
    }
   

    addCustomer(customer: Customer): Observable<Customer> {
        return this.POST<Customer>('customers', customer);
    }
     deleteCustomer(id: string): Observable<Customer> {
        return this.http.delete<Customer>(
            `${this.serverUrl}customers/${id}`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': this.getToken()
                }
            }
        )
    }
     updateCustomer(id: string, customer: Customer): Observable<Customer> {
        return this.http.put<Customer>(
            `${this.serverUrl}customers/${id}`,
            customer,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': this.getToken()
                }
            }
        )
    }
}
