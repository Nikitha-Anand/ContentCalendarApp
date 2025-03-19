import { Component } from '@angular/core';
import { ContentComponent } from './calendar-components/content/content.component';
import { AddContentComponent } from './content/add-content/add-content.component';
import { provideHttpClient } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  imports: [ContentComponent, AddContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'content-calendar-frontend';
}

bootstrapApplication(AppComponent, {
  providers: [provideHttpClient()] 
});