import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePagesComponent } from './pages/home-pages/home-pages.component';
import { AboutPagesComponent } from './pages/about-pages/about-pages.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { ContactPagesComponent } from './pages/contact-pages/contact-pages.component';

@NgModule({
  declarations: [
    HomePagesComponent,
    AboutPagesComponent,
    SidebarComponent,
    ContactPagesComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    HomePagesComponent,
    AboutPagesComponent,
    ContactPagesComponent,
    SidebarComponent,
  ],
})
export class SharedModule {}
