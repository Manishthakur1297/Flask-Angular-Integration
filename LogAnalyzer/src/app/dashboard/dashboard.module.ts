import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { AnalyzeComponent } from './analyze/analyze.component';
import { VisualizeComponent } from './visualize/visualize.component';
import { SearchComponent } from './search/search.component';
import { SortingComponent } from './sorting/sorting.component';
import { RouterModule } from '@angular/router';
import { dashboardroutes } from './dashboard.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AuthGuard } from '../guard/auth-guard.service';

@NgModule({
  declarations: [LayoutComponent, AnalyzeComponent, VisualizeComponent, SearchComponent, SortingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(dashboardroutes),
    FormsModule,HttpModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuard]
})
export class DashboardModule { }
