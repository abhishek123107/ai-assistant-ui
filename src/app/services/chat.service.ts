import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, delay, of } from 'rxjs';
import { Message } from '../components/message-bubble/message-bubble.component';

export interface ChatSession {
  id: string;
  title: string;
  messages: Message[];
  createdAt: Date;
  updatedAt: Date;
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private currentSession = new BehaviorSubject<ChatSession | null>(null);
  private chatHistory = new BehaviorSubject<ChatSession[]>([]);

  constructor() { 
    this.initializeDefaultSession();
  }

  private initializeDefaultSession(): void {
    const defaultSession: ChatSession = {
      id: 'default',
      title: 'New Conversation',
      messages: [
        {
          id: '1',
          text: "Hello! I'm your AI Assistant. How can I help you today? You can ask me about programming, courses, or any technical questions!",
          sender: 'ai',
          timestamp: new Date()
        }
      ],
      createdAt: new Date(),
      updatedAt: new Date()
    };

    this.currentSession.next(defaultSession);
    this.chatHistory.next([defaultSession]);
  }

  getCurrentSession(): Observable<ChatSession | null> {
    return this.currentSession.asObservable();
  }

  getChatHistory(): Observable<ChatSession[]> {
    return this.chatHistory.asObservable();
  }

  sendMessage(messageText: string): void {
    const currentSession = this.currentSession.value;
    if (!currentSession) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      sender: 'user',
      timestamp: new Date()
    };

    const updatedSession = {
      ...currentSession,
      messages: [...currentSession.messages, userMessage],
      updatedAt: new Date()
    };

    this.currentSession.next(updatedSession);
    this.updateSessionInHistory(updatedSession);

    // Simulate AI response
    this.generateAIResponse(messageText);
  }

  private generateAIResponse(userMessage: string): void {
    const responses = [
      "That's a great question! Let me help you with that.",
      "I understand what you're looking for. Here's what I can tell you...",
      "Based on what you've asked, I'd recommend checking out our resources.",
      "That's an interesting topic! Here's my perspective on it...",
      "I can definitely help you with that. Let me explain...",
      "Great question! Here's what you need to know...",
      "Thanks for asking! Here's a detailed explanation...",
      "Let me break this down for you step by step..."
    ];

    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    
    // Simulate typing delay
    of(null).pipe(delay(1000 + Math.random() * 1000)).subscribe(() => {
      const currentSession = this.currentSession.value;
      if (!currentSession) return;

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: randomResponse,
        sender: 'ai',
        timestamp: new Date()
      };

      const updatedSession = {
        ...currentSession,
        messages: [...currentSession.messages, aiMessage],
        updatedAt: new Date()
      };

      this.currentSession.next(updatedSession);
      this.updateSessionInHistory(updatedSession);
    });
  }

  private updateSessionInHistory(updatedSession: ChatSession): void {
    const history = this.chatHistory.value;
    const index = history.findIndex(session => session.id === updatedSession.id);
    
    if (index >= 0) {
      history[index] = updatedSession;
    } else {
      history.push(updatedSession);
    }
    
    this.chatHistory.next([...history]);
  }

  createNewSession(): void {
    const newSession: ChatSession = {
      id: Date.now().toString(),
      title: 'New Conversation',
      messages: [],
      createdAt: new Date(),
      updatedAt: new Date()
    };

    this.currentSession.next(newSession);
    this.chatHistory.next([...this.chatHistory.value, newSession]);
  }

  loadSession(sessionId: string): void {
    const session = this.chatHistory.value.find(s => s.id === sessionId);
    if (session) {
      this.currentSession.next(session);
    }
  }

  deleteSession(sessionId: string): void {
    const history = this.chatHistory.value.filter(session => session.id !== sessionId);
    this.chatHistory.next(history);

    if (this.currentSession.value?.id === sessionId) {
      this.initializeDefaultSession();
    }
  }

  clearCurrentSession(): void {
    const currentSession = this.currentSession.value;
    if (!currentSession) return;

    const clearedSession = {
      ...currentSession,
      messages: [],
      updatedAt: new Date()
    };

    this.currentSession.next(clearedSession);
    this.updateSessionInHistory(clearedSession);
  }
}
