import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionModule } from 'primeng/accordion';
import { DialogModule } from 'primeng/dialog';

import { SubscriptionRoutingModule } from './subscription-routing.module';
import { SubscriptionPageComponent } from './subscription-page.component';
import { ContactSalesComponent } from './contact-sales/contact-sales.component';

@NgModule({
  declarations: [SubscriptionPageComponent, ContactSalesComponent],
  imports: [CommonModule, SubscriptionRoutingModule, AccordionModule, DialogModule],
})
export class SubscriptionModule {}
