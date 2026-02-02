import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-white border-b border-gray-200 px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
      <div class="flex items-center justify-between">
        <!-- Mobile Menu Toggle -->
        <button 
          (click)="onMenuToggle()"
          class="lg:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200"
          aria-label="Toggle menu"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>

        <!-- Title Section -->
        <div class="flex-1 min-w-0">
          <h1 class="text-xl sm:text-2xl font-bold text-gray-900 truncate">AI Assistant</h1>
          <p class="text-xs sm:text-sm text-gray-600 mt-0.5 sm:mt-1 hidden sm:block">Always here to help</p>
        </div>
        
        <!-- Status and Profile -->
        <div class="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
          <!-- Online Status -->
          <div class="hidden sm:flex items-center space-x-2">
            <div class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span class="text-sm font-medium text-gray-700">Online</span>
          </div>
          
          <!-- Mobile Status Indicator -->
          <div class="sm:hidden">
            <div class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          </div>
          
          <!-- Profile Avatar -->
          <div class="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
            <svg class="w-4 h-4 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }
    
    /* Ensure proper spacing on mobile */
    @media (max-width: 639px) {
      .truncate {
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
    }
  `]
})
export class HeaderComponent {
  @Output() menuToggle = new EventEmitter<void>();

  onMenuToggle(): void {
    this.menuToggle.emit();
  }
}
