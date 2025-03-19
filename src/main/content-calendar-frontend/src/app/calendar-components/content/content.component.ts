import { Component, OnInit } from '@angular/core';
import { CalendarService } from '../../services/content.service';
import { EditContentComponent } from '../../components/edit-content/edit-content.component';
import { Content } from '../../models/content.model';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  imports: [EditContentComponent],
})
export class ContentComponent implements OnInit {

  contentList: any[] = [];
  isLoading: boolean = false;
  errorMessage: string | null = null;
  
  selectedContent: Content = new Content;
  isEditModalOpen: boolean = false;

  constructor(private calendarService: CalendarService) {}

  ngOnInit() {
    this.calendarService.contentList$.subscribe((data) => {
      this.contentList = data;
    });

    this.calendarService.isLoading$.subscribe((loading) => {
      this.isLoading = loading;
    });

    this.calendarService.errorMessage$.subscribe((error) => {
      this.errorMessage = error;
    });

    this.calendarService.fetchContents();
  }

  openEditModal(content: Content) {
    this.selectedContent = content;
    this.isEditModalOpen = true;
  }
  
  removeContent(id: number) {
    this.calendarService.deleteContent(id).subscribe({
      next: () => {
        console.log('Content deleted:', id);
        this.calendarService.fetchContents();
      },
      error: (err) => console.error('Delete error:', err)
    });
  }
}
