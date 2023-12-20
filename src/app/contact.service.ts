import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private contactEmail: string = 'karnagnana@gmail.com';

  getContactEmail(): string {
    return this.contactEmail;
  }
}
