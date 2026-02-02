import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-white border-b border-gray-200 px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-2 xs:py-3 sm:py-4">
      <div class="flex items-center justify-between">
        <!-- Mobile Menu Toggle -->
        <button 
          (click)="onMenuToggle()"
          class="xs:hidden sm:hidden md:hidden lg:hidden xl:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all duration-200 hover:scale-105"
          aria-label="Toggle menu"
        >
          <svg class="w-5 h-5 xs:w-6 xs:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>

        <!-- Title Section -->
        <div class="flex-1 min-w-0 mx-2 xs:mx-3 sm:mx-4">
          <h1 class="text-lg xs:text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl font-bold text-gray-900 truncate animate-fade-in">
            AI Assistant
          </h1>
          <p class="text-2xs xs:text-xs sm:text-sm md:text-sm lg:text-base xl:text-base text-gray-600 mt-0.5 xs:mt-1 hidden xs:block sm:block md:block lg:block">
            Always here to help
          </p>
        </div>
        
        <!-- Status and Profile -->
        <div class="flex items-center space-x-1 xs:space-x-2 sm:space-x-3 md:space-x-4 flex-shrink-0">
          <!-- Online Status -->
          <div class="hidden sm:flex md:flex lg:flex items-center space-x-1 sm:space-x-2">
            <div class="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2 md:h-2 lg:w-2 lg:h-2 bg-green-500 rounded-full animate-bounce-subtle"></div>
            <span class="text-2xs xs:text-xs sm:text-sm md:text-sm lg:text-sm font-medium text-gray-700 hidden md:block lg:block">
              Online
            </span>
          </div>
          
          <!-- Mobile Status Indicator -->
          <div class="xs:hidden sm:hidden">
            <div class="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full animate-bounce-subtle"></div>
          </div>
          
          <!-- Profile Avatar -->
          <div class="w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 hover:scale-105 transition-transform duration-200 cursor-pointer shadow-lg">
            <svg class="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
