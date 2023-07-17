import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatTabsModule } from '@angular/material/tabs';
import { SharedModule } from '@app/shared';
import { ResearchPapersComponent } from './research-papers.component';
import { ResearchPapersRoutingModule } from './research-papers-routing.module';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [ResearchPapersComponent],
  imports: [CommonModule, FormsModule, SharedModule, ToastModule, MatTabsModule, ResearchPapersRoutingModule],
})
export class ResearchPapersModule { }
