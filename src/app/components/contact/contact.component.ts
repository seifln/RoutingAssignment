import { Component } from '@angular/core';
import { StarComponent } from "../../component/star/star.component";
import {  FormsModule} from "@angular/forms";

@Component({
  selector: 'app-contact',
  imports: [StarComponent,FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  isData:boolean =  false;
  userName:string = '';
  userAge:string = '';
  userEmail:string = '';
  userPassword:string = '';
}
