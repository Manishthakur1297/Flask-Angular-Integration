import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { AnalyzeComponent } from './analyze/analyze.component';
import { VisualizeComponent } from './visualize/visualize.component';
import { SearchComponent } from './search/search.component';
import { SortingComponent } from './sorting/sorting.component';
import { AuthGuard } from '../guard/auth-guard.service';

export const dashboardroutes : Routes = 
[
    {
        path : 'dashboard',
        component : LayoutComponent,
        canActivate : [AuthGuard],
        children : 
        [
            {
                path : '',
                component : AnalyzeComponent
            },

            {
                path : 'analyze',
                component : AnalyzeComponent
            },

            {

                path : 'visualize',
                component : VisualizeComponent
            },

            {

                path : 'search',
                component : SearchComponent
            },

            {

                path : 'sorting',
                component : SortingComponent
            },

        ]
    }
    

];