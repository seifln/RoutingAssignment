import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,RouterLinkActive,],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
 isScroll:boolean=true;


 @HostListener('window:scroll')
 userScroll(){
  this.isScroll = !(window.scrollY > 30)
 }
}
