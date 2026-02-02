import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-box',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="border-t border-gray-200 bg-white px-2 xs:px-3 sm:px-4 md:px-5 lg:px-6 py-2 xs:py-3 sm:py-4">
      <div class="flex items-center space-x-1 xs:space-x-2 sm:space-x-3">
        <!-- Search Icon -->
        <div class="flex-shrink-0">
          <svg class="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-5 lg:h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </div>
        
        <!-- Input Field -->
        <input 
          type="text" 
          [(ngModel)]="message"
          (keyup.enter)="sendMessage()"
          placeholder="Type your message..."
          class="flex-1 px-2 xs:px-3 sm:px-3 md:px-4 lg:px-4 py-1.5 xs:py-2 sm:py-2 md:py-3 lg:py-3 bg-gray-50 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-2xs xs:text-xs sm:text-sm md:text-sm lg:text-sm transition-all duration-200 hover:bg-gray-100"
        >
        
        <!-- Send Button -->
        <button 
          (click)="sendMessage()"
          [disabled]="!message.trim()"
          class="flex-shrink-0 w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-10 md:h-10 lg:w-10 lg:h-10 bg-green-500 hover:bg-green-600 disabled:bg-gray-300 text-white rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105 disabled:hover:scale-100 shadow-lg hover:shadow-xl"
        >
          <svg class="w-2.5 h-2.5 xs:w-3 xs:h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
