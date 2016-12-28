import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { Menu1Component } from './menus/menu-1/menu1.component';
import { Menu2Component } from './menus/menu-1/menu2.component';
import { Menu3Component } from './menus/menu-1/menu3.component';
import { Menu4Component } from './menus/menu-1/menu4.component';
import { DonationComponent } from './donation/donation.component';

const APP_ROUTES: Routes = [
  { path: 'nos-valeurs', component: Menu1Component },
  { path: 'nos-valeurs/qui-sommes-nous', component: Menu2Component },
  { path: 'nos-valeurs/notre-mission', component: Menu3Component },
  { path: 'nos-valeurs/nos-archives', component: Menu4Component },
  { path: 'donation', component: DonationComponent },
  { path: '', component: HomeComponent }
];

export const Routing = RouterModule.forRoot(APP_ROUTES);
