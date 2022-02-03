import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RemoteEntryComponent } from './entry.component';
import { FeatLoginModule } from '@mfe-netlify/feat-login';

@NgModule({
  declarations: [RemoteEntryComponent],
  imports: [
    CommonModule,
    FeatLoginModule,
    RouterModule.forChild([
      {
        path: '',
        component: RemoteEntryComponent,
      },
    ]),
  ],
  providers: [],
})
export class RemoteEntryModule {}
