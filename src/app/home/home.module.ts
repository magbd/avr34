import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { HomeComponent } from './home.component'
import { HomeJumbotronComponent } from './home-jumbotron.component'
import { HomeContentComponent } from './home-content.component'
import { SharedModule } from '../shared/shared.module'
import { FormModule } from '../form/form.module'

@NgModule({
    imports: [ CommonModule,
               SharedModule,
               FormModule
            ],
    declarations: [ HomeComponent,
                    HomeJumbotronComponent,
                    HomeContentComponent
                 ],
    exports: [ HomeComponent,
               HomeJumbotronComponent,
               HomeContentComponent
             ],
    providers: []
})
export class HomeModule {}