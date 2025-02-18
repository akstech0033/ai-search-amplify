import { Component } from '@angular/core';
import { AiService } from '../../services/ai.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  query: string = '';
  responses: any = null;
  loading: boolean = false;
  error: string | null = null;
  selectedAI: string = 'summary';
  errors: string[] = [];

  constructor(private aiService: AiService) {}

  searchAI() {
    if (!this.query.trim()) return;
    
    this.loading = true;
    this.error = null;
    
    this.aiService.search(this.query).subscribe({
      next: (data) => {
        this.responses = data;
        this.loading = false;
        this.errors = data.errors;
      },
      error: (err) => {
        this.error = 'Error fetching AI responses.';
        this.loading = false;
      }
    });
  }
}
