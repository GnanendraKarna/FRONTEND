import { Component } from '@angular/core';
import { ContactService } from '../../contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactEmail: string | undefined;

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.contactEmail = this.contactService.getContactEmail();
  }

}
