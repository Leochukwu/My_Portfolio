import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preloader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './preloader.component.html',
  styleUrl: './preloader.component.scss'
})
export class PreloaderComponent implements OnInit {

  isLoading: boolean = true;

  constructor(){}

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false
    },3000);
    
  }


}
