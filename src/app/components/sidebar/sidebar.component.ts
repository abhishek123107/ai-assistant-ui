import { Component, EventEmitter, Output } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

export interface NavItem {
  id: string;
  label: string;
  icon: string;
  category: 'main' | 'tools';
  route: string;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="w-64 h-full bg-sidebar-bg flex flex-col">
      <!-- Logo Section -->
      <div class="p-6 border-b border-gray-700">
        <div class="flex items-center space-x-3">
          <div class="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
            </svg>
          </div>
          <div>
            <h1 class="text-xl font-bold text-sidebar-text">AI Assistant</h1>
            <p class="text-xs text-sidebar-textSecondary">Enterprise Platform</p>
          </div>
        </div>
      </div>

      <!-- Navigation -->
      <nav class="flex-1 p-4 space-y-6">
        <!-- Main Section -->
        <div>
          <h3 class="text-xs font-semibold text-sidebar-textSecondary uppercase tracking-wider mb-3">Main</h3>
          <ul class="space-y-1">
            <li *ngFor="let item of mainItems">
              <a 
                [routerLink]="item.route" 
                class="flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-colors duration-200"
                [class.bg-sidebar-active]="isActive(item.route)"
                [class.text-white]="isActive(item.route)"
                [class.text-sidebar-text.hover:bg-sidebar-hover]="!isActive(item.route)"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" [attr.d]="item.icon"></path>
                </svg>
                <span class="font-medium">{{ item.label }}</span>
              </a>
            </li>
          </ul>
        </div>

        <!-- Tools Section -->
        <div>
          <h3 class="text-xs font-semibold text-sidebar-textSecondary uppercase tracking-wider mb-3">Tools</h3>
          <ul class="space-y-1">
            <li *ngFor="let item of toolsItems">
              <a 
                [routerLink]="item.route" 
                class="flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-colors duration-200"
                [class.bg-sidebar-active]="isActive(item.route)"
                [class.text-white]="isActive(item.route)"
                [class.text-sidebar-text.hover:bg-sidebar-hover]="!isActive(item.route)"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" [attr.d]="item.icon"></path>
                </svg>
                <span class="font-medium">{{ item.label }}</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      height: 100vh;
    }
  `]
})
export class SidebarComponent {
  mainItems: NavItem[] = [
    {
      id: 'chat',
      label: 'Chat',
      icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z',
      category: 'main',
      route: '/chat'
    },
    {
      id: 'knowledge',
      label: 'Knowledge Base',
      icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
      category: 'main',
      route: '/knowledge-base'
    },
    {
      id: 'courses',
      label: 'Courses',
      icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
      category: 'main',
      route: '/courses'
    }
  ];

  toolsItems: NavItem[] = [
    {
      id: 'settings',
      label: 'Settings',
      icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z',
      category: 'tools',
      route: '/settings'
    },
    {
      id: 'analytics',
      label: 'Analytics',
      icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
      category: 'tools',
      route: '/analytics'
    },
    {
      id: 'history',
      label: 'History',
      icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
      category: 'tools',
      route: '/history'
    }
  ];

  constructor(private router: Router) {}

  isActive(route: string): boolean {
    return this.router.url === route;
  }
}
