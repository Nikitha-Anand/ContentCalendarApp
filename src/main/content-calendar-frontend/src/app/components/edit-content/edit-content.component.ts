import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CalendarService } from '../../services/content.service';
import { Content } from '../../models/content.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-content',
  standalone: true,
  templateUrl: './edit-content.component.html',
  styleUrls: ['./edit-content.component.css'],
  imports:[FormsModule],
})
export class EditContentComponent {
  @Input() content!: Content; 
  @Output() close = new EventEmitter<void>();

  constructor(private contentService: CalendarService) {}

  updateContent() {
    const updatedContent = { 
      ...this.content, 
    };

    this.contentService.updateContent(this.content.id, updatedContent).subscribe(() => {
      console.log("Update Content: ", this.content.id)
      this.close.emit();
      console.log("Content Updated!")
    });
  }

  cancelContent() {
    this.close.emit();
    this.contentService.fetchContents();
  }
}
