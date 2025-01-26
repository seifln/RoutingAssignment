import { Component } from '@angular/core';
import { StarComponent } from "../../component/star/star.component";

@Component({
  selector: 'app-portfolio',
  imports: [StarComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  arrImgs:Image[]=[
    {img:'./imgs/port1.png'},
    {img:'./imgs/port2.png'},
    {img:'./imgs/port3.png'},
    {img:'./imgs/port1.png'},
    {img:'./imgs/port2.png'},
    {img:'./imgs/port3.png'},
  ]
  modalImg !:string;
  modalView:boolean =true;

  showModal(e:MouseEvent,img:HTMLImageElement){
    if(e.target != img){
      this.modalView=true

    }
  }
}
interface Image{
  img:string

}
