import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { UserApiKeyComponent } from './user-api-key/user-api-key.component';
import { HomeRoutingModule } from './home-routing.module';
import { FormsModule } from '@angular/forms';
import { MomentModule } from 'ngx-moment';
import { PostTableComponent } from './post-table/post-table.component';
import { PostStatusPipe, PostStatusCssPipe } from './post-table/poststatus.pipe';
import { ModalMessageComponent } from './modal-message/modal-message.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AboutComponent } from './about.component';
import { SiteFooterComponent } from './site-footer/site-footer.component';
import { SiteNavComponent } from './site-nav/site-nav.component';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    UserApiKeyComponent,
    PostTableComponent,
    PostStatusPipe,
    PostStatusCssPipe,
    ModalMessageComponent,
    SiteFooterComponent,
    SiteNavComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    MomentModule,
    AngularFontAwesomeModule
  ],
  providers: [
  ]
})
export class HomeModule { }
