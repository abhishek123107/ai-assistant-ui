import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ChatHistory {
  id: string;
  title: string;
  lastMessage: string;
  timestamp: Date;
  messageCount: number;
  category: 'general' | 'programming' | 'courses' | 'technical';
}

@Component({
  selector: 'app-history-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="p-8">
      <div class="max-w-6xl mx-auto">
        <!-- Header -->
        <div class="mb-8">
          <h1 class="text-3xl font-bold text-gray-900 mb-2">Chat History</h1>
          <p class="text-gray-600">Review your past conversations and continue where you left off</p>
        </div>

        <!-- Search and Filter -->
        <div class="mb-6 flex flex-wrap gap-4 items-center">
          <div class="flex-1 min-w-[300px]">
            <input 
              type="text" 
              [(ngModel)]="searchQuery"
              placeholder="Search conversations..."
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
          </div>
          
          <select 
            [(ngModel)]="selectedCategory" 
            class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Categories</option>
            <option value="general">General</option>
            <option value="programming">Programming</option>
            <option value="courses">Courses</option>
            <option value="technical">Technical</option>
          </select>

          <select 
            [(ngModel)]="sortBy" 
            class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="recent">Most Recent</option>
            <option value="oldest">Oldest</option>
            <option value="messages">Most Messages</option>
          </select>
        </div>

        <!-- Chat History List -->
        <div 
            *ngFor="let chat of filteredChats"
            class="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200 cursor-pointer mb-4"
          >
            <div class="flex items-start justify-between">
              <div class="flex-1">
                <div class="flex items-center mb-2">
                  <h3 class="text-lg font-semibold text-gray-900 mr-3">{{ chat.title }}</h3>
                  <span class="text-xs font-medium px-2 py-1 rounded"
                    [class.bg-blue-100.text-blue-700]="chat.category === 'general'"
                    [class.bg-green-100.text-green-700]="chat.category === 'programming'"
                    [class.bg-purple-100.text-purple-700]="chat.category === 'courses'"
                    [class.bg-orange-100.text-orange-700]="chat.category === 'technical'"
                  >
                    {{ chat.category.charAt(0).toUpperCase() + chat.category.slice(1) }}
                  </span>
                </div>
                
                <p class="text-gray-600 mb-3 line-clamp-2">{{ chat.lastMessage }}</p>
                
                <div class="flex items-center text-sm text-gray-500 space-x-4">
                  <span class="flex items-center">
                    <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                    </svg>
                    {{ chat.messageCount }} messages
                  </span>
                  <span class="flex items-center">
                    <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    {{ formatDate(chat.timestamp) }}
                  </span>
                </div>
              </div>
              
              <div class="flex flex-col space-y-2 ml-4">
                <button class="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-200">
                  Continue
                </button>
                <button class="px-3 py-1 text-sm text-gray-600 border border-gray-300 rounded hover:bg-gray-50 transition-colors duration-200">
                  Delete
                </button>
              </div>
            </div>
          </div>

        <!-- Empty State -->
        <div *ngIf="filteredChats.length === 0" class="text-center py-12">
          <svg class="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
          </svg>
          <h3 class="text-lg font-medium text-gray-900 mb-2">No conversations found</h3>
          <p class="text-gray-500">Start a new conversation to see it appear here</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      height: 100%;
      overflow-y: auto;
    }
    
    .line-clamp-2 {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  `]
})
export class HistoryPageComponent {
  searchQuery: string = '';
  selectedCategory: string = 'all';
  sortBy: string = 'recent';

  chatHistory: ChatHistory[] = [];

  get filteredChats() {
    let filtered = this.chatHistory;

    // Filter by search query
    if (this.searchQuery) {
      filtered = filtered.filter(chat => 
        chat.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        chat.lastMessage.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }

    // Filter by category
    if (this.selectedCategory !== 'all') {
      filtered = filtered.filter(chat => chat.category === this.selectedCategory);
    }

    // Sort
    filtered.sort((a, b) => {
      switch (this.sortBy) {
        case 'recent':
          return b.timestamp.getTime() - a.timestamp.getTime();
        case 'oldest':
          return a.timestamp.getTime() - b.timestamp.getTime();
        case 'messages':
          return b.messageCount - a.messageCount;
        default:
          return 0;
      }
    });

    return filtered;
  }

  formatDate(date: Date): string {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    
    if (days === 0) {
      return 'Today';
    } else if (days === 1) {
      return 'Yesterday';
    } else if (days < 7) {
      return `${days} days ago`;
    } else {
      return date.toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric',
        year: date.getFullYear() !== now.getFullYear() ? 'numeric' : undefined
      });
    }
  }
}
