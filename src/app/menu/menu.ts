import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [ RouterOutlet, RouterLink ],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {

}
