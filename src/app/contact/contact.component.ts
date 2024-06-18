import { Component } from '@angular/core';
import { Database, get, onValue, ref, set, update } from '@angular/fire/database';
import { FormControl,FormsModule,  FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  messageform = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required]),
  
  });
constructor(private database: Database){

}
sendmessage(formValues: any){

  if (formValues.firstname === '') {
    alert('Please enter name');
    return;
  }
  if (formValues.email === '') {
    alert('Please enter email');
    return;
  }
  
  set(ref(this.database,'users/'+ formValues.name),{
    firstname : formValues.firstname,
    lastname : formValues.lastname,
    email : formValues.email,
    message : formValues.message,
 

  })
  alert('Message send Succesfully');
  this.messageform.reset();

          
 
 

}

}