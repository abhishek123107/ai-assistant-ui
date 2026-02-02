import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-settings-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="p-2 xs:p-3 sm:p-4 md:p-6 lg:p-8">
      <div class="max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto">
        <!-- Header -->
        <div class="mb-4 xs:mb-5 sm:mb-6 md:mb-8">
          <h1 class="text-xl xs:text-2xl sm:text-2xl md:text-3xl lg:text-3xl font-bold text-gray-900 mb-1 xs:mb-2 animate-fade-in">
            Settings
          </h1>
          <p class="text-2xs xs:text-xs sm:text-sm md:text-base lg:text-base text-gray-600">
            Manage your account preferences and configurations
          </p>
        </div>

        <!-- Settings Sections -->
        <div class="space-y-3 xs:space-y-4 sm:space-y-4 md:space-y-6">
          <!-- Appearance -->
          <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-3 xs:p-4 sm:p-4 md:p-6 hover:shadow-md transition-shadow duration-200">
            <h2 class="text-base xs:text-lg sm:text-lg md:text-xl lg:text-xl font-semibold text-gray-900 mb-2 xs:mb-3 sm:mb-3 md:mb-4">
              Appearance
            </h2>
            
            <div class="space-y-2 xs:space-y-3 sm:space-y-3 md:space-y-4">
              <div class="flex flex-col xs:flex-row sm:flex-row md:flex-row lg:flex-row items-start xs:items-center sm:items-center md:items-center gap-2 xs:gap-3 sm:gap-3 md:gap-4">
                <div class="flex-1 min-w-0">
                  <label class="text-sm xs:text-sm sm:text-sm md:text-base font-medium text-gray-700">
                    Dark Mode
                  </label>
                  <p class="text-2xs xs:text-xs sm:text-xs md:text-sm text-gray-500">
                    Toggle dark theme for the interface
                  </p>
                </div>
                <label class="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" [(ngModel)]="darkMode" class="sr-only peer">
                  <div class="w-9 xs:w-11 sm:w-11 md:w-11 h-5 xs:h-6 sm:h-6 md:h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 xs:after:h-5 sm:after:h-5 md:after:h-5 after:w-4 xs:after:w-5 sm:after:w-5 md:after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>

              <div class="flex flex-col xs:flex-row sm:flex-row md:flex-row lg:flex-row items-start xs:items-center sm:items-center md:items-center gap-2 xs:gap-3 sm:gap-3 md:gap-4">
                <div class="flex-1 min-w-0">
                  <label class="text-sm xs:text-sm sm:text-sm md:text-base font-medium text-gray-700">
                    Compact View
                  </label>
                  <p class="text-2xs xs:text-xs sm:text-xs md:text-sm text-gray-500">
                    Use more compact layout
                  </p>
                </div>
                <label class="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" [(ngModel)]="compactView" class="sr-only peer">
                  <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>
          </div>

          <!-- Notifications -->
          <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-3 xs:p-4 sm:p-4 md:p-6 hover:shadow-md transition-shadow duration-200">
            <h2 class="text-base xs:text-lg sm:text-lg md:text-xl lg:text-xl font-semibold text-gray-900 mb-2 xs:mb-3 sm:mb-3 md:mb-4">
              Notifications
            </h2>
            
            <div class="space-y-2 xs:space-y-3 sm:space-y-3 md:space-y-4">
              <div class="flex flex-col xs:flex-row sm:flex-row md:flex-row lg:flex-row items-start xs:items-center sm:items-center md:items-center gap-2 xs:gap-3 sm:gap-3 md:gap-4">
                <div class="flex-1 min-w-0">
                  <label class="text-sm xs:text-sm sm:text-sm md:text-base font-medium text-gray-700">
                    Email Notifications
                  </label>
                  <p class="text-2xs xs:text-xs sm:text-xs md:text-sm text-gray-500">
                    Receive email updates about your activity
                  </p>
                </div>
                <label class="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" [(ngModel)]="emailNotifications" class="sr-only peer">
                  <div class="w-9 xs:w-11 sm:w-11 md:w-11 h-5 xs:h-6 sm:h-6 md:h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 xs:after:h-5 sm:after:h-5 md:after:h-5 after:w-4 xs:after:w-5 sm:after:w-5 md:after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>

              <div class="flex flex-col xs:flex-row sm:flex-row md:flex-row lg:flex-row items-start xs:items-center sm:items-center md:items-center gap-2 xs:gap-3 sm:gap-3 md:gap-4">
                <div class="flex-1 min-w-0">
                  <label class="text-sm xs:text-sm sm:text-sm md:text-base font-medium text-gray-700">
                    Desktop Notifications
                  </label>
                  <p class="text-2xs xs:text-xs sm:text-xs md:text-sm text-gray-500">
                    Show desktop notifications
                  </p>
                </div>
                <label class="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" [(ngModel)]="desktopNotifications" class="sr-only peer">
                  <div class="w-9 xs:w-11 sm:w-11 md:w-11 h-5 xs:h-6 sm:h-6 md:h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 xs:after:h-5 sm:after:h-5 md:after:h-5 after:w-4 xs:after:w-5 sm:after:w-5 md:after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>
          </div>

          <!-- Account -->
          <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-3 xs:p-4 sm:p-4 md:p-6 hover:shadow-md transition-shadow duration-200">
            <h2 class="text-base xs:text-lg sm:text-lg md:text-xl lg:text-xl font-semibold text-gray-900 mb-2 xs:mb-3 sm:mb-3 md:mb-4">
              Account
            </h2>
            
            <div class="space-y-2 xs:space-y-3 sm:space-y-3 md:space-y-4">
              <div>
                <label class="text-sm xs:text-sm sm:text-sm md:text-base font-medium text-gray-700">
                  Username
                </label>
                <input 
                  type="text" 
                  [(ngModel)]="username"
                  class="mt-1 w-full px-2 xs:px-3 sm:px-3 md:px-4 py-1.5 xs:py-2 sm:py-2 md:py-3 text-2xs xs:text-xs sm:text-sm md:text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 hover:border-gray-400"
                >
              </div>

              <div>
                <label class="text-sm xs:text-sm sm:text-sm md:text-base font-medium text-gray-700">
                  Email
                </label>
                <input 
                  type="email" 
                  [(ngModel)]="email"
                  class="mt-1 w-full px-2 xs:px-3 sm:px-3 md:px-4 py-1.5 xs:py-2 sm:py-2 md:py-3 text-2xs xs:text-xs sm:text-sm md:text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 hover:border-gray-400"
                >
              </div>
            </div>
          </div>

          <!-- Save Button -->
          <div class="flex justify-end">
            <button 
              (click)="saveSettings()"
              class="px-3 xs:px-4 sm:px-6 py-1.5 xs:py-2 bg-blue-500 text-white text-2xs xs:text-xs sm:text-sm md:text-sm rounded-lg hover:bg-blue-600 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Save Changes
            </button>
          </div>
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
  `]
})
export class SettingsPageComponent {
  darkMode: boolean = false;
  compactView: boolean = false;
  emailNotifications: boolean = true;
  desktopNotifications: boolean = false;
  username: string = 'John Doe';
  email: string = 'john.doe@example.com';

  saveSettings(): void {
    console.log('Settings saved:', {
      darkMode: this.darkMode,
      compactView: this.compactView,
      emailNotifications: this.emailNotifications,
      desktopNotifications: this.desktopNotifications,
      username: this.username,
      email: this.email
    });
  }
}
