import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  template: `<h1>{{ title }}</h1>`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'web';

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getHello().subscribe({
      next: (data) => this.title = data.Hello,
      error: (error) => console.error('There was an error!', error)
    });
  }
}
