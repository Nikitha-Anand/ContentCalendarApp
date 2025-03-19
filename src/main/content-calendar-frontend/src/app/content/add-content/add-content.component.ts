import { Component, ViewChild } from '@angular/core';
import { CalendarService } from '../../services/content.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

let count = 1; 
@Component({
  selector: 'app-add-content',
  templateUrl: './add-content.component.html',
  styleUrls: ['./add-content.component.css'],
  imports: [CommonModule, FormsModule]
})

export class AddContentComponent {
  formattedDate = new Date().toISOString();
  newContent = { id:count.toString(), title: "", description: "", date: this.formattedDate};
  successMessage = '';
  errorMessage = '';

  constructor(private calendarService: CalendarService) {}

  onSubmit() {
    count++;
    this.calendarService.addContent(this.newContent).subscribe({
      next: () => {
        this.successMessage = 'Content added successfully!';
        this.calendarService.fetchContents();
      },
      error: () => {
        this.errorMessage = 'Failed to add content. Please try again.';
      }
    });
  }
}