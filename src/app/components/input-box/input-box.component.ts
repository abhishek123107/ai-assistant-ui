import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-box',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="border-t border-gray-200 bg-white px-6 py-4">
      <div class="flex items-center space-x-3">
        <!-- Search Icon -->
        <div class="flex-shrink-0">
          <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </div>
        
        <!-- Input Field -->
        <input 
          type="text" 
          [(ngModel)]="message"
          (keyup.enter)="sendMessage()"
          placeholder="Type your message..."
          class="flex-1 px-4 py-3 bg-gray-50 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
        >
        
        <!-- Send Button -->
        <button 
          (click)="sendMessage()"
          [disabled]="!message.trim()"
          class="flex-shrink-0 w-10 h-10 bg-green-500 hover:bg-green-600 disabled:bg-gray-300 text-white rounded-full flex items-center justify-center transition-colors duration-200"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
          </svg>
        </button>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }
    
    input:focus {
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    }
  `]
})
export class InputBoxComponent {
  @Output() messageSent = new EventEmitter<string>();
  message: string = '';

  sendMessage(): void {
    if (this.message.trim()) {
      this.messageSent.emit(this.message.trim());
      this.message = '';
    }
  }
}
