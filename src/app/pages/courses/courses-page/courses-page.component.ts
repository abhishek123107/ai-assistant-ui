import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-courses-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="p-8">
      <div class="max-w-6xl mx-auto">
        <!-- Header -->
        <div class="mb-8">
          <h1 class="text-3xl font-bold text-gray-900 mb-2">Courses</h1>
          <p class="text-gray-600">Enhance your skills with our comprehensive course catalog</p>
        </div>

        <!-- Filters -->
        <div class="mb-8 flex flex-wrap gap-4 items-center">
          <select 
            [(ngModel)]="selectedLevel" 
            class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Levels</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>

          <select 
            [(ngModel)]="selectedDuration" 
            class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Durations</option>
            <option value="short">Short (&lt; 5 hours)</option>
            <option value="medium">Medium (5-20 hours)</option>
            <option value="long">Long (&gt; 20 hours)</option>
          </select>

          <div class="flex-1">
            <input 
              type="text" 
              [(ngModel)]="searchQuery"
              placeholder="Search courses..."
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
          </div>
        </div>

        <!-- Course Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div 
            *ngFor="let course of filteredCourses"
            class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-200 cursor-pointer"
          >
            <!-- Course Image -->
            <div class="h-40 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <svg class="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
              </svg>
            </div>

            <!-- Course Content -->
            <div class="p-6">
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">{{ course.level }}</span>
                <span class="text-xs text-gray-500">{{ course.duration }}h</span>
              </div>
              
              <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ course.title }}</h3>
              <p class="text-gray-600 text-sm mb-4">{{ course.description }}</p>
              
              <div class="flex items-center justify-between mb-4">
                <div class="flex items-center">
                  <div class="flex text-yellow-400">
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                    <svg class="w-4 h-4 text-gray-300" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  </div>
                  <span class="text-xs text-gray-500 ml-1">({{ course.reviews }})</span>
                </div>
                <span class="text-xs text-gray-500">{{ course.students }} students</span>
              </div>

              <div class="flex items-center justify-between">
                <span class="text-lg font-bold text-gray-900">\${{ course.price }}</span>
                <button class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200">
                  Enroll Now
                </button>
              </div>
            </div>
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
export class CoursesPageComponent {
  searchQuery: string = '';
  selectedLevel: string = 'all';
  selectedDuration: string = 'all';

  courses = [
    {
      id: 1,
      title: 'Angular 18 Complete Guide',
      description: 'Master Angular 18 from basics to advanced concepts with real-world projects.',
      level: 'Intermediate',
      duration: 25,
      price: 89.99,
      rating: 4.8,
      reviews: 1234,
      students: 5678
    },
    {
      id: 2,
      title: 'TypeScript Fundamentals',
      description: 'Learn TypeScript from scratch and build type-safe applications.',
      level: 'Beginner',
      duration: 12,
      price: 49.99,
      rating: 4.6,
      reviews: 892,
      students: 3456
    },
    {
      id: 3,
      title: 'Advanced JavaScript Patterns',
      description: 'Deep dive into advanced JavaScript patterns and best practices.',
      level: 'Advanced',
      duration: 18,
      price: 79.99,
      rating: 4.9,
      reviews: 567,
      students: 2345
    },
    {
      id: 4,
      title: 'React vs Angular Comparison',
      description: 'Compare and contrast React and Angular to choose the right framework.',
      level: 'Intermediate',
      duration: 4,
      price: 29.99,
      rating: 4.5,
      reviews: 234,
      students: 1234
    },
    {
      id: 5,
      title: 'Web Development Bootcamp',
      description: 'Complete web development bootcamp covering HTML, CSS, and JavaScript.',
      level: 'Beginner',
      duration: 40,
      price: 99.99,
      rating: 4.7,
      reviews: 3456,
      students: 12345
    },
    {
      id: 6,
      title: 'Node.js Backend Development',
      description: 'Build scalable backend applications with Node.js and Express.',
      level: 'Intermediate',
      duration: 22,
      price: 69.99,
      rating: 4.8,
      reviews: 789,
      students: 4567
    }
  ];

  get filteredCourses() {
    return this.courses.filter(course => {
      const matchesSearch = course.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                           course.description.toLowerCase().includes(this.searchQuery.toLowerCase());
      const matchesLevel = this.selectedLevel === 'all' || course.level.toLowerCase() === this.selectedLevel;
      
      let matchesDuration = true;
      if (this.selectedDuration === 'short') matchesDuration = course.duration < 5;
      else if (this.selectedDuration === 'medium') matchesDuration = course.duration >= 5 && course.duration <= 20;
      else if (this.selectedDuration === 'long') matchesDuration = course.duration > 20;
      
      return matchesSearch && matchesLevel && matchesDuration;
    });
  }
}
