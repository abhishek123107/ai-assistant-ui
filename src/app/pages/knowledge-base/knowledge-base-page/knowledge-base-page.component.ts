import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-knowledge-base-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="p-8">
      <div class="max-w-6xl mx-auto">
        <!-- Header -->
        <div class="mb-8">
          <h1 class="text-3xl font-bold text-gray-900 mb-2">Knowledge Base</h1>
          <p class="text-gray-600">Find answers to common questions and learn about our features</p>
        </div>

        <!-- Search Bar -->
        <div class="mb-8">
          <div class="relative max-w-2xl">
            <input 
              type="text" 
              [(ngModel)]="searchQuery"
              placeholder="Search articles..."
              class="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
            <svg class="absolute left-4 top-3.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
        </div>

        <!-- Categories -->
        <div class="mb-8">
          <div class="flex flex-wrap gap-2">
            <button 
              *ngFor="let category of categories"
              (click)="selectedCategory = category"
              class="px-4 py-2 rounded-full border transition-colors duration-200"
              [class.bg-blue-500.text-white.border-blue-500]="selectedCategory === category"
              [class.bg-white.text-gray-700.border-gray-300.hover:bg-gray-50]="selectedCategory !== category"
            >
              {{ category }}
            </button>
          </div>
        </div>

        <!-- Articles Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div 
            *ngFor="let article of filteredArticles"
            class="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200 cursor-pointer"
          >
            <div class="flex items-center mb-3">
              <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
              </div>
              <span class="text-sm font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">{{ article.category }}</span>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ article.title }}</h3>
            <p class="text-gray-600 text-sm mb-3">{{ article.excerpt }}</p>
            <div class="flex items-center justify-between text-xs text-gray-500">
              <span>{{ article.readTime }} min read</span>
              <span>{{ article.views }} views</span>
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
export class KnowledgeBasePageComponent {
  searchQuery: string = '';
  selectedCategory: string = 'All';
  categories = ['All', 'Getting Started', 'Programming', 'Courses', 'Technical', 'Account'];

  articles = [
    {
      id: 1,
      title: 'Getting Started with AI Assistant',
      excerpt: 'Learn the basics of using our AI Assistant platform and its key features.',
      category: 'Getting Started',
      readTime: 5,
      views: 1234
    },
    {
      id: 2,
      title: 'Introduction to TypeScript',
      excerpt: 'A comprehensive guide to TypeScript fundamentals and best practices.',
      category: 'Programming',
      readTime: 10,
      views: 892
    },
    {
      id: 3,
      title: 'Course Navigation Guide',
      excerpt: 'How to navigate and make the most of our course offerings.',
      category: 'Courses',
      readTime: 3,
      views: 567
    },
    {
      id: 4,
      title: 'API Integration Best Practices',
      excerpt: 'Learn how to integrate APIs effectively in your applications.',
      category: 'Technical',
      readTime: 8,
      views: 445
    },
    {
      id: 5,
      title: 'Managing Your Account',
      excerpt: 'Account settings, preferences, and profile management.',
      category: 'Account',
      readTime: 4,
      views: 789
    },
    {
      id: 6,
      title: 'Advanced Angular Concepts',
      excerpt: 'Deep dive into advanced Angular patterns and architectures.',
      category: 'Programming',
      readTime: 15,
      views: 334
    }
  ];

  get filteredArticles() {
    return this.articles.filter(article => {
      const matchesSearch = article.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                           article.excerpt.toLowerCase().includes(this.searchQuery.toLowerCase());
      const matchesCategory = this.selectedCategory === 'All' || article.category === this.selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }
}
