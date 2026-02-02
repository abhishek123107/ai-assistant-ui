import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatWindowComponent } from '../../../components/chat-window/chat-window.component';
import { Message } from '../../../components/message-bubble/message-bubble.component';

@Component({
  selector: 'app-chat-page',
  standalone: true,
  imports: [CommonModule, ChatWindowComponent],
  template: `
    <div class="h-full">
      <app-chat-window [messages]="messages"></app-chat-window>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      height: 100%;
    }
  `]
})
export class ChatPageComponent implements OnInit {
  messages: Message[] = [];

  ngOnInit() {
    // Add initial AI greeting message
    this.messages.push({
      id: '1',
      text: "Hello! I'm your AI Assistant. How can I help you today? You can ask me about programming, courses, or any technical questions!",
      sender: 'ai',
      timestamp: new Date()
    });
  }
}
