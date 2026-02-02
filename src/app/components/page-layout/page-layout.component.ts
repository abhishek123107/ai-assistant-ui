import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HeaderComponent } from '../header/header.component';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-page-layout',
  standalone: true,
  imports: [CommonModule, SidebarComponent, HeaderComponent],
  template: `
    <div class="flex h-screen bg-gray-100 relative overflow-hidden">
      <!-- Mobile Sidebar Overlay -->
      <div 
        *ngIf="isMobileSidebarOpen" 
        class="fixed inset-0 bg-black bg-opacity-50 z-40 xs:hidden sm:hidden md:hidden lg:hidden"
        (click)="toggleMobileSidebar()"
      ></div>
      
      <!-- Sidebar -->
      <div 
        class="fixed xs:relative sm:relative md:relative lg:relative z-50 lg:z-auto transform transition-all duration-300 ease-in-out"
        [class.translate-x-0]="isMobileSidebarOpen"
        [class.-translate-x-full]="!isMobileSidebarOpen"
        [class.translate-x-0]="true"
        [class.w-56]="true"
        [class.xs:w-48]="true"
        [class.sm:w-52]="true"
        [class.md:w-60]="true"
        [class.lg:w-64]="true"
        [class.xl:w-72]="true"
        [class.xl:w-80]="true"
      >
        <app-sidebar></app-sidebar>
      </div>
      
      <!-- Main Content Area -->
      <div class="flex-1 flex flex-col overflow-hidden min-w-0">
        <!-- Header -->
        <app-header (menuToggle)="toggleMobileSidebar()"></app-header>
        
        <!-- Page Content (Router Outlet) -->
        <main class="flex-1 overflow-hidden bg-white">
          <div class="h-full overflow-y-auto scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-300 hover:scrollbar-thumb-gray-400">
            <ng-content></ng-content>
          </div>
        </main>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      height: 100vh;
    }
    
    /* Custom scrollbar for mobile */
    @media (max-width: 1023px) {
      ::-webkit-scrollbar {
        width: 4px;
      }
      
      ::-webkit-scrollbar-track {
        background: #f1f1f1;
      }
      
      ::-webkit-scrollbar-thumb {
        background: #c1c1c1;
        border-radius: 2px;
      }
      
      ::-webkit-scrollbar-thumb:hover {
        background: #a8a8a8;
      }
    }
  `]
})
export class PageLayoutComponent implements OnInit, OnDestroy {
  isMobileSidebarOpen = false;
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    // Listen for custom closeSidebar event only in browser
    if (this.isBrowser) {
      window.addEventListener('closeSidebar', this.closeMobileSidebar.bind(this));
    }
  }

  ngOnDestroy(): void {
    // Clean up event listener only in browser
    if (this.isBrowser) {
      window.removeEventListener('closeSidebar', this.closeMobileSidebar.bind(this));
    }
  }

  toggleMobileSidebar(): void {
    this.isMobileSidebarOpen = !this.isMobileSidebarOpen;
  }

  closeMobileSidebar(): void {
    this.isMobileSidebarOpen = false;
  }
}
