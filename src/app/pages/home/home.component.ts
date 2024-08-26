import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  email: string = 'leocchukwu@gmail.com'


  blogItem: any = [];

  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.http.get('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@chukwugodwinc').subscribe(
      (res: any) => {
        this.blogItem = res.items

      },
      (err:any) => {}
    )
    
  }

}
