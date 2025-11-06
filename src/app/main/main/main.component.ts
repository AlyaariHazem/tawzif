import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: false,
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent{
 constructor(private router: Router) {}

  goCompanies() {
    this.router.navigate(['/companies','modules']);
  }
}
