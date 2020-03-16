import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  public usernameFormControl: FormControl;

  public teamFromGroup: FormGroup;

  public schoolFormGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.usernameFormControl = new FormControl('');
    this.teamFromGroup = new FormGroup({
      name: new FormControl(''),
      slogan: new FormControl(''),
      address: new FormGroup({
        province: new FormControl(''),
        city: new FormControl(''),
        area: new FormControl('')
      })
    });

    this.schoolFormGroup = this.formBuilder.group({
      name: [
        '',
        [
          Validators.required,
          Validators.maxLength(10),
          Validators.minLength(2)
        ]
      ],
      address: this.formBuilder.group({
        province: [''],
        city: [''],
        area: ['']
      })
    });

  }

  ngOnInit(): void {
  }

  public setUserNameValue() {
    this.usernameFormControl.setValue('JACK');
  }

  public getUserNameValue() {
    console.log(this.usernameFormControl);
  }

  public getFormGroupValue() {
    console.log(this.teamFromGroup);
  }

  public setFormGroupValue() {
    this.teamFromGroup.setValue({
      name: 'set team name',
      slogan: 'set team slogan',
      address: {
        province: 'set team province',
        city: 'set team city',
        area: 'set team area'
      }
    }, {onlySelf: true});
  }

  public patchFormGroupValue() {
    this.teamFromGroup.patchValue({
      name: 'patch team name',
      address: {
        province: 'patch team address province'
      }
    });
  }

  public teamFormSubmit() {
    console.log(this.teamFromGroup.value);
  }

  public schoolFormSubmit() {
    console.log(this.schoolFormGroup);
    console.log(this.schoolFormGroup.value);
  }

  get schoolFormName() {
    return this.schoolFormGroup.get('name');
  }

}
