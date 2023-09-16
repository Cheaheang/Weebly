import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { Routes,RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { OnlineStoresComponent } from './online-stores/online-stores.component';
import { PricingComponent } from './pricing/pricing.component';
import { PhotoStudioComponent } from './more/photo-studio/photo-studio.component';
import { GuidesComponent } from './more/guides/guides.component';
import { MarketingComponent } from './more/marketing/marketing.component';
import { ThemesComponent } from './more/themes/themes.component';
import { FeaturesComponent } from './more/features/features.component';
import { WeeblyBlogComponent } from './more/weebly-blog/weebly-blog.component';
import { InspirationCenterComponent } from './more/inspiration-center/inspiration-center.component';
import { AppCenterComponent } from './more/app-center/app-center.component';
import { SEOGuideComponent } from './more/seo-guide/seo-guide.component';
import { HelpComponent } from './more/help/help.component';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
 import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
 import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// import {DroupDown} from './ng_zorro/dropdown/dropdown.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';


import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';

 // import { NzDemoDropdownBasicComponent } from './app.component';

//ng-zero
import { NzAffixModule } from 'ng-zorro-antd/affix';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzAnchorModule } from 'ng-zorro-antd/anchor';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzBackTopModule } from 'ng-zorro-antd/back-top';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCalendarModule } from 'ng-zorro-antd/calendar';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzCascaderModule } from 'ng-zorro-antd/cascader';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzCommentModule } from 'ng-zorro-antd/comment';
import { NzNoAnimationModule } from 'ng-zorro-antd/core/no-animation';
import { NzTransButtonModule } from 'ng-zorro-antd/core/trans-button';
import { NzWaveModule } from 'ng-zorro-antd/core/wave';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzI18nModule } from 'ng-zorro-antd/i18n';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzMentionModule } from 'ng-zorro-antd/mention';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzSegmentedModule } from 'ng-zorro-antd/segmented';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { NzTimelineModule } from 'ng-zorro-antd/timeline';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzTransferModule } from 'ng-zorro-antd/transfer';
import { NzTreeModule } from 'ng-zorro-antd/tree';
import { NzTreeViewModule } from 'ng-zorro-antd/tree-view';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzResizableModule } from 'ng-zorro-antd/resizable';
import { NzPipesModule } from 'ng-zorro-antd/pipes';
import { NzCodeEditorModule } from 'ng-zorro-antd/code-editor';
import { NzGraphModule } from 'ng-zorro-antd/graph';
import { NzCronExpressionModule } from 'ng-zorro-antd/cron-expression';
import { NzQRCodeModule } from 'ng-zorro-antd/qr-code';
import { NzWaterMarkModule } from 'ng-zorro-antd/water-mark';
import { DropdownComponent } from './ng_zorro/dropdown/dropdown.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


//animations module
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { provideAnimations } from '@angular/platform-browser/animations';
import { config } from 'rxjs';
import { NzTransitionPatchDirective } from 'ng-zorro-antd/core/transition-patch/transition-patch.directive';

registerLocaleData(en);
const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NotFoundComponent,
    OnlineStoresComponent,
    PricingComponent,
    PhotoStudioComponent,
    GuidesComponent,
    MarketingComponent,
    ThemesComponent,
    FeaturesComponent,
    WeeblyBlogComponent,
    InspirationCenterComponent,
    AppCenterComponent,
    SEOGuideComponent,
    HelpComponent,
    DropdownComponent,
    LoginComponent,
    SignupComponent,

       ],
  imports: [
    NzTypographyModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ScrollingModule,
    DragDropModule,
    RouterModule.forRoot([
      {
        path:'homePage',component: OnlineStoresComponent
      },
      {
        path:'Online-Stores',component: HomePageComponent
      },
      {
        path:'Pricing',component: PricingComponent
      },
      {
        path:'Guides',component: GuidesComponent
      },
      {
        path:'Marketing',component: MarketingComponent
      },
      {
        path:'Theme',component: FeaturesComponent
      },
      {
        path:'Features',component: FeaturesComponent
      },
      {
        path:'Weebly-blog',component: WeeblyBlogComponent
      },
      {
        path:'Inspiration-center',component: HomePageComponent
      },
      {
        path:'App-center',component: AppCenterComponent
      },
      {
        path:'SEO-Guide',component: SEOGuideComponent
      },
      {
        path:'Help',component: HelpComponent
      },
      {
        path:'*',component: NotFoundComponent
      }
    ]),
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzDropDownModule,
    NzIconModule,
    NzSelectModule,
    NzButtonModule,
    //animation
    BrowserModule,
    BrowserAnimationsModule,
    NzTypographyModule,
 

   ],
  exports: [
    RouterModule,

     //ng zorro
     NzAffixModule,
     NzAlertModule,
     NzAnchorModule,
     NzAutocompleteModule,
     NzAvatarModule,
     NzBackTopModule,
     NzBadgeModule,
     NzButtonModule,
     NzBreadCrumbModule,
     NzCalendarModule,
     NzCardModule,
     NzCarouselModule,
     NzCascaderModule,
     NzCheckboxModule,
     NzCollapseModule,
     NzCommentModule,
     NzCronExpressionModule,
     NzDatePickerModule,
     NzDescriptionsModule,
     NzDividerModule,
     NzDrawerModule,
     NzDropDownModule,
     NzEmptyModule,
     NzFormModule,
     NzGridModule,
     NzI18nModule,
     NzIconModule,
     NzImageModule,
     NzInputModule,
     NzInputNumberModule,
     NzLayoutModule,
     NzListModule,
     NzMentionModule,
     NzMenuModule,
     NzMessageModule,
     NzModalModule,
     NzNoAnimationModule,
     NzNotificationModule,
     NzPageHeaderModule,
     NzPaginationModule,
     NzPopconfirmModule,
     NzPopoverModule,
     NzProgressModule,
     NzRadioModule,
     NzRateModule,
     NzResultModule,
     NzSegmentedModule,
     NzSelectModule,
     NzSkeletonModule,
     NzSliderModule,
     NzSpaceModule,
     NzSpinModule,
     NzStatisticModule,
     NzStepsModule,
     NzSwitchModule,
     NzTableModule,
     NzTabsModule,
     NzTagModule,
     NzTimePickerModule,
     NzTimelineModule,
     NzToolTipModule,
     NzTransButtonModule,
     NzTransferModule,
     NzTreeModule,
     NzTreeViewModule,
     NzTreeSelectModule,
     NzTypographyModule,
     NzUploadModule,
     NzWaveModule,
     NzResizableModule,
     NzPipesModule,
     NzCodeEditorModule,
     NzGraphModule,
     NzQRCodeModule,
     NzWaterMarkModule,
     NzTypographyModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    { provide: NZ_ICONS, useValue: icons },

  ],
  bootstrap: [AppComponent,
  ],

})
export class AppModule { }
