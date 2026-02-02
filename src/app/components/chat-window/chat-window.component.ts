import { Component, Input, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageBubbleComponent, Message } from '../message-bubble/message-bubble.component';
import { InputBoxComponent } from '../input-box/input-box.component';

@Component({
  selector: 'app-chat-window',
  standalone: true,
  imports: [CommonModule, MessageBubbleComponent, InputBoxComponent],
  template: `
    <div class="flex-1 flex flex-col bg-gray-50 h-full">
      <!-- Messages Container -->
      <div 
        #messagesContainer
        class="flex-1 overflow-y-auto px-2 xs:px-3 sm:px-4 md:px-5 lg:px-6 py-2 xs:py-3 sm:py-4 space-y-1 xs:space-y-2 scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-300 hover:scrollbar-thumb-gray-400"
      >
        <div *ngIf="messages.length === 0" class="flex items-center justify-center h-full px-2 xs:px-3 sm:px-4">
          <div class="text-center max-w-xs xs:max-w-sm sm:max-w-md mx-auto animate-fade-in">
            <div class="w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-2 xs:mb-3 sm:mb-4 hover:scale-105 transition-transform duration-200">
              <svg class="w-5 h-5 xs:w-6 xs:h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-10 lg:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
              </svg>
            </div>
            <h3 class="text-sm xs:text-base sm:text-lg md:text-lg lg:text-lg font-semibold text-gray-900 mb-1 xs:mb-2">
              Start a conversation
            </h3>
            <p class="text-2xs xs:text-xs sm:text-sm md:text-sm lg:text-sm text-gray-600 leading-relaxed">
              Ask me anything! I'm here to help with programming, courses, and technical questions.
            </p>
          </div>
        </div>
        
        <app-message-bubble 
          *ngFor="let message of messages; trackBy: trackByMessageId"
          [message]="message"
        ></app-message-bubble>
      </div>
      
      <!-- Input Box -->
      <app-input-box (messageSent)="handleMessageSent($event)"></app-input-box>
    </div>
  `,
  styles: [`
    :host {
      display: flex;
      flex-direction: column;
      height: 100%;
    }
  `]
})
export class ChatWindowComponent implements AfterViewChecked {
  @Input() messages: Message[] = [];
  @ViewChild('messagesContainer') private messagesContainer!: ElementRef;

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  private scrollToBottom(): void {
    try {
      this.messagesContainer.nativeElement.scrollTop = this.messagesContainer.nativeElement.scrollHeight;
    } catch (err) {
      console.error('Error scrolling to bottom:', err);
    }
  }

  handleMessageSent(message: string): void {
    const newMessage: Message = {
      id: Date.now().toString(),
      text: message,
      sender: 'user',
      timestamp: new Date()
    };
    
    this.messages.push(newMessage);
    
    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: this.generateAIResponse(message),
        sender: 'ai',
        timestamp: new Date()
      };
      this.messages.push(aiResponse);
    }, 1000);
  }

  private generateAIResponse(userMessage: string): string {
    const responses = [
      "That's a great question! Let me help you with that.",
      "I understand what you're looking for. Here's what I can tell you...",
      "Based on what you've asked, I'd recommend checking out our resources.",
      "That's an interesting topic! Here's my perspective on it...",
      "I can definitely help you with that. Let me explain...",
      "Great question! Here's what you need to know..."
    ];
    
    return responses[Math.floor(Math.random() * responses.length)];
  }

  trackByMessageId(index: number, message: Message): string {
    return message.id;
  }
}
