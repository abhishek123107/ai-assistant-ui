import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
  isTyping?: boolean;
}

@Component({
  selector: 'app-message-bubble',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex mb-3 sm:mb-4" [class.justify-end]="message.sender === 'user'">
      <div class="flex max-w-[75%] sm:max-w-[70%]" [class.flex-row-reverse]="message.sender === 'user'">
        <!-- Avatar -->
        <div class="flex-shrink-0 mx-1 sm:mx-2">
          <div 
            class="w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center"
            [class.bg-blue-500]="message.sender === 'user'"
            [class.bg-gradient-to-br.from-blue-500.to-purple-600]="message.sender === 'ai'"
          >
            <svg class="w-3 h-3 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                [attr.d]="message.sender === 'user' 
                  ? 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                  : 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'"
              ></path>
            </svg>
          </div>
        </div>
        
        <!-- Message Content -->
        <div class="flex flex-col min-w-0 flex-1">
          <div 
            class="px-3 py-2 sm:px-4 sm:py-3 rounded-2xl shadow-sm break-words"
            [class.bg-blue-500.text-white]="message.sender === 'user'"
            [class.bg-gray-100.text-gray-900]="message.sender === 'ai'"
          >
            <ng-container *ngIf="!message.isTyping; else typingIndicator">
              <p class="text-xs sm:text-sm leading-relaxed">{{ message.text }}</p>
            </ng-container>
            
            <ng-template #typingIndicator>
              <div class="flex space-x-1">
                <div class="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0ms;"></div>
                <div class="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 150ms;"></div>
                <div class="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 300ms;"></div>
              </div>
            </ng-template>
          </div>
          
          <!-- Timestamp -->
          <div 
            class="mt-1 px-1 text-xs text-gray-500"
            [class.text-right]="message.sender === 'user'"
          >
            {{ formatTimestamp(message.timestamp) }}
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class MessageBubbleComponent {
  @Input() message!: Message;

  formatTimestamp(date: Date): string {
    return date.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true 
    });
  }
}
