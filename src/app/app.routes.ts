import { Routes } from '@angular/router';

/**
 * Global application routes
 * --------------------------------------------------
 * • Default route redirects to Tab 1.
 * • Each tab is lazy-loaded via `loadComponent`.
 * • Details pages stay exactly as you already had them.
 * • Wildcard route sends unknown URLs back to root.
 */
export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./tabs/tabs.page').then(m => m.TabsPage),
    children: [
      /* 👉 Optional: open Tab 1 when at /tabs */
      { path: '', redirectTo: 'tab1', pathMatch: 'full' },

      {
        path: 'tab1',
        loadComponent: () =>
          import('./tab1/tab1.page').then(m => m.Tab1Page)
      },
      {
        path: 'tab2',
        loadComponent: () =>
          import('./tab2/tab2.page').then(m => m.Tab2Page)
      },
      {
        path: 'tab3',
        loadComponent: () =>
          import('./tab3/tab3.page').then(m => m.Tab3Page)
      }
    ]
  },

  /* ---------- Stand-alone detail pages ---------- */
  {
    path: 'details',
    loadComponent: () =>
      import('./details/details.page').then(m => m.DetailsPage)
  },
  {
    path: 'details-ceiling',
    loadComponent: () =>
      import('./details-ceiling/details-ceiling.page')
        .then(m => m.DetailsCeilingPage)
  },
  {
    path: 'details-vase',
    loadComponent: () =>
      import('./details-vase/details-vase.page')
        .then(m => m.DetailsVasePage)
  },
  {
    path: 'details-lake',
    loadComponent: () =>
      import('./details-lake/details-lake.page')
        .then(m => m.DetailsLakePage)
  },
  {
    path: 'details-bird',
    loadComponent: () =>
      import('./details-bird/details-bird.page')
        .then(m => m.DetailsBirdPage)
  },
  {
    path: 'details-sea',
    loadComponent: () =>
      import('./details-sea/details-sea.page')
        .then(m => m.DetailsSeaPage)
  },
  {
    path: 'details-fountain',
    loadComponent: () =>
      import('./details-fountain/details-fountain.page')
        .then(m => m.DetailsFountainPage)
  },

  /* 👉 Optional: wildcard fallback */
  { path: '**', redirectTo: '' }
];
