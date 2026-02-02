import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

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
    <div class="w-56 0:w-10 1:w-10 2:w-12 3:w-12 4:w-12 5:w-16 xs:w-12 sm:w-52 md:w-60 lg:w-64 xl:w-72 2xl:w-80 h-full bg-sidebar-bg flex flex-col transform transition-all duration-300 ease-in-out shadow-xl 0:shadow-2xl 1:shadow-2xl 2:shadow-2xl 3:shadow-2xl 4:shadow-2xl 5:shadow-2xl xs:shadow-2xl">
      <!-- Logo Section -->
      <div class="p-3 0:p-1 1:p-1 2:p-2 3:p-2 4:p-2 5:p-2 xs:p-2 sm:p-4 md:p-5 lg:p-6 border-b border-gray-700">
        <div class="flex items-center space-x-2 0:justify-center 1:justify-center 2:justify-center 3:justify-center 4:justify-center 5:justify-center xs:justify-center sm:space-x-3">
          <div class="w-6 h-6 0:w-6 0:h-6 1:w-6 1:h-6 2:w-7 2:h-7 3:w-7 3:h-7 4:w-7 4:h-7 5:w-8 5:h-8 xs:w-7 xs:h-7 sm:w-8 sm:w-8 md:w-10 md:h-10 lg:w-10 lg:w-10 xl:w-12 xl:w-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 hover:scale-105 transition-transform duration-200">
            <svg class="w-3 h-3 0:w-3 0:h-3 1:w-3 1:h-3 2:w-4 2:h-4 3:w-4 3:h-4 4:w-4 4:h-4 5:w-5 5:h-5 xs:w-4 xs:h-4 sm:w-5 sm:w-5 md:w-6 md:h-6 lg:w-6 lg:w-6 xl:w-7 xl:w-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
            </svg>
          </div>
          <div class="min-w-0 flex-1 0:hidden 1:hidden 2:hidden 3:hidden 4:hidden 5:hidden xs:hidden sm:block">
            <h1 class="text-base 0:text-lg 1:text-lg 2:text-lg 3:text-lg 4:text-lg 5:text-lg xs:text-lg sm:text-lg md:text-xl lg:text-xl xl:text-2xl font-bold text-sidebar-text truncate animate-fade-in">
              AI Assistant
            </h1>
            <p class="text-2xs 0:text-xs 1:text-xs 2:text-xs 3:text-xs 4:text-xs 5:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-sm text-sidebar-textSecondary hidden 0:hidden 1:hidden 2:hidden 3:hidden 4:hidden 5:hidden xs:hidden sm:block md:block lg:block">
              Enterprise Platform
            </p>
          </div>
        </div>
      </div>

      <!-- Navigation -->
      <nav class="flex-1 p-2 0:p-1 1:p-1 2:p-1 3:p-1 4:p-1 5:p-1 xs:p-1 sm:p-3 md:p-4 lg:p-4 space-y-3 0:space-y-1 1:space-y-1 2:space-y-2 3:space-y-2 4:space-y-2 5:space-y-2 xs:space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-6 overflow-y-auto scrollbar-thin scrollbar-track-gray-800 scrollbar-thumb-gray-600 hover:scrollbar-thumb-gray-500">
        <!-- Main Section -->
        <div>
          <h3 class="text-2xs 0:text-xs 1:text-xs 2:text-xs 3:text-xs 4:text-xs 5:text-xs xs:text-xs sm:text-xs md:text-xs lg:text-xs font-semibold text-sidebar-textSecondary uppercase tracking-wider mb-2 0:mb-1 1:mb-1 2:mb-1 3:mb-1 4:mb-1 5:mb-2 xs:mb-2 sm:mb-2 md:mb-3 lg:mb-3 px-1 0:px-1 1:px-1 2:px-1 3:px-1 4:px-1 5:px-1 xs:px-1 sm:px-2 md:px-3 lg:px-3 0:hidden 1:hidden 2:hidden 3:hidden 4:hidden 5:hidden xs:hidden sm:block">
            Main
          </h3>
          <ul class="space-y-1">
            <li *ngFor="let item of mainItems">
              <a 
                [routerLink]="item.route" 
                (click)="closeSidebarOnMobile()"
                class="flex items-center 0:justify-center 1:justify-center 2:justify-center 3:justify-center 4:justify-center 5:justify-center xs:justify-center space-x-1 0:space-x-0 1:space-x-0 2:space-x-0 3:space-x-0 4:space-x-0 5:space-x-0 xs:space-x-0 sm:space-x-2 md:space-x-3 lg:space-x-3 px-2 0:px-1 1:px-1 2:px-1 3:px-1 4:px-1 5:px-1 xs:px-1 sm:px-2 md:px-3 lg:px-3 py-1.5 0:py-2 1:py-2 2:py-2 3:py-2 4:py-2 5:py-2 xs:py-2 sm:py-2 md:py-2.5 lg:py-2.5 rounded-lg transition-all duration-200 hover:scale-[1.02] 0:hover:scale-110 1:hover:scale-110 2:hover:scale-110 3:hover:scale-110 4:hover:scale-110 5:hover:scale-110 xs:hover:scale-110"
                [class.bg-sidebar-active]="isActive(item.route)"
                [class.text-white]="isActive(item.route)"
                [class.text-sidebar-text.hover:bg-sidebar-hover]="!isActive(item.route)"
                [title]="item.label"
              >
                <svg class="w-3 h-3 0:w-4 0:h-4 1:w-4 1:h-4 2:w-5 2:h-5 3:w-5 3:h-5 4:w-5 4:h-5 5:w-5 5:h-5 xs:w-5 xs:h-5 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-5 lg:h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" [attr.d]="item.icon"></path>
                </svg>
                <span class="font-medium text-2xs 0:text-xs 1:text-xs 2:text-xs 3:text-xs 4:text-xs 5:text-xs xs:text-xs sm:text-sm md:text-sm lg:text-base truncate 0:hidden 1:hidden 2:hidden 3:hidden 4:hidden 5:hidden xs:hidden sm:block">
                  {{ item.label }}
                </span>
              </a>
            </li>
          </ul>
        </div>

        <!-- Tools Section -->
        <div>
          <h3 class="text-2xs 0:text-xs 1:text-xs 2:text-xs 3:text-xs 4:text-xs 5:text-xs xs:text-xs sm:text-xs md:text-xs lg:text-xs font-semibold text-sidebar-textSecondary uppercase tracking-wider mb-2 0:mb-1 1:mb-1 2:mb-1 3:mb-1 4:mb-1 5:mb-2 xs:mb-2 sm:mb-2 md:mb-3 lg:mb-3 px-1 0:px-1 1:px-1 2:px-1 3:px-1 4:px-1 5:px-1 xs:px-1 sm:px-2 md:px-3 lg:px-3 0:hidden 1:hidden 2:hidden 3:hidden 4:hidden 5:hidden xs:hidden sm:block">
            Tools
          </h3>
          <ul class="space-y-1">
            <li *ngFor="let item of toolsItems">
              <a 
                [routerLink]="item.route" 
                (click)="closeSidebarOnMobile()"
                class="flex items-center 0:justify-center 1:justify-center 2:justify-center 3:justify-center 4:justify-center 5:justify-center xs:justify-center space-x-1 0:space-x-0 1:space-x-0 2:space-x-0 3:space-x-0 4:space-x-0 5:space-x-0 xs:space-x-0 sm:space-x-2 md:space-x-3 lg:space-x-3 px-2 0:px-1 1:px-1 2:px-1 3:px-1 4:px-1 5:px-1 xs:px-1 sm:px-2 md:px-3 lg:px-3 py-1.5 0:py-2 1:py-2 2:py-2 3:py-2 4:py-2 5:py-2 xs:py-2 sm:py-2 md:py-2.5 lg:py-2.5 rounded-lg transition-all duration-200 hover:scale-[1.02] 0:hover:scale-110 1:hover:scale-110 2:hover:scale-110 3:hover:scale-110 4:hover:scale-110 5:hover:scale-110 xs:hover:scale-110"
                [class.bg-sidebar-active]="isActive(item.route)"
                [class.text-white]="isActive(item.route)"
                [class.text-sidebar-text.hover:bg-sidebar-hover]="!isActive(item.route)"
                [title]="item.label"
              >
                <svg class="w-3 h-3 0:w-4 0:h-4 1:w-4 1:h-4 2:w-5 2:h-5 3:w-5 3:h-5 4:w-5 4:h-5 5:w-5 5:h-5 xs:w-5 xs:h-5 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-5 lg:h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" [attr.d]="item.icon"></path>
                </svg>
                <span class="font-medium text-2xs 0:text-xs 1:text-xs 2:text-xs 3:text-xs 4:text-xs 5:text-xs xs:text-xs sm:text-sm md:text-sm lg:text-base truncate 0:hidden 1:hidden 2:hidden 3:hidden 4:hidden 5:hidden xs:hidden sm:block">
                  {{ item.label }}
                </span>
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

  constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: Object) {}

  isActive(route: string): boolean {
    return this.router.url === route;
  }

  closeSidebarOnMobile(): void {
    // Emit a custom event to notify parent component only in browser
    if (isPlatformBrowser(this.platformId)) {
      window.dispatchEvent(new CustomEvent('closeSidebar'));
    }
  }
}
