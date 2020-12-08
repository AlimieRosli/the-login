import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public loginForm;
  public submitClicked: boolean = false;

  constructor() { }

  ngOnInit(): void {

    // validation
    this.loginForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ])
    });

    console.log("initial :", this.loginForm);
  }

  // field access
  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }

  onSubmit(){
    console.log("clicked :", this.loginForm);
    this.submitClicked = true;

    // verify validation status
    if(!this.loginForm.invalid){
      alert("Submitted");
    }  
  }

}
