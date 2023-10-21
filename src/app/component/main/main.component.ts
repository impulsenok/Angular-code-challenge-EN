import { Component, OnInit } from '@angular/core';
import { FormComponent } from "../form/form.component";

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css'],
    standalone: true,
    imports: [FormComponent]
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
