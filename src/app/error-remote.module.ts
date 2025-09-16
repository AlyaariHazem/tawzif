import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: false,
  selector: 'remote-error',
  template: `<section style="padding:2rem">
               <h2>Could not load remote module.</h2>
               <p>Please try again later.</p>
             </section>`
})
export class RemoteErrorComponent {}

@NgModule({
  imports: [CommonModule],
  declarations: [RemoteErrorComponent],
})
export class RemoteErrorModule {}
