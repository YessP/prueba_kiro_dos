import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'bch-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <a class="skip-link" href="#main-content">Saltar al contenido principal</a>
    <router-outlet />
  `,
})
export class AppComponent {}
