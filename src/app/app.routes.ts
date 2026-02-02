import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/chat',
    pathMatch: 'full'
  },
  {
    path: 'chat',
    loadComponent: () => import('./pages/chat/chat-page/chat-page.component').then(m => m.ChatPageComponent)
  },
  {
    path: 'knowledge-base',
    loadComponent: () => import('./pages/knowledge-base/knowledge-base-page/knowledge-base-page.component').then(m => m.KnowledgeBasePageComponent)
  },
  {
    path: 'courses',
    loadComponent: () => import('./pages/courses/courses-page/courses-page.component').then(m => m.CoursesPageComponent)
  },
  {
    path: 'settings',
    loadComponent: () => import('./pages/settings/settings-page/settings-page.component').then(m => m.SettingsPageComponent)
  },
  {
    path: 'analytics',
    loadComponent: () => import('./pages/analytics/analytics-page/analytics-page.component').then(m => m.AnalyticsPageComponent)
  },
  {
    path: 'history',
    loadComponent: () => import('./pages/history/history-page/history-page.component').then(m => m.HistoryPageComponent)
  },
  {
    path: '**',
    redirectTo: '/chat'
  }
];
