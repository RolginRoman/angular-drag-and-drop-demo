import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {DragulaModule} from 'ng2-dragula';
import {SampleComponent} from './sample/sample.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CdkDragAndDropModule} from './cdk-drag-and-drop/cdk-drag-and-drop.module';
import {NgxDragAndDropModule} from './ngx-drag-and-drop/ngx-drag-and-drop.module';
import {RouterModule, Routes} from '@angular/router';
import {CdkDragAndDropComponent} from './cdk-drag-and-drop/cdk-drag-and-drop/cdk-drag-and-drop.component';
import {NgxDragAndDropComponent} from './ngx-drag-and-drop/ngx-drag-and-drop.component';
import {MatTabsModule} from '@angular/material/tabs';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'cdk',
        pathMatch: 'full',
    },
    {
        path: 'cdk',
        component: CdkDragAndDropComponent,
    },
    {
        path: 'ngx',
        component: NgxDragAndDropComponent,
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
];

@NgModule({
    declarations: [
        AppComponent,
        SampleComponent,
    ],
    imports: [
        BrowserModule,
        CdkDragAndDropModule,
        NgxDragAndDropModule,
        DragulaModule.forRoot(),
        BrowserAnimationsModule,
        RouterModule.forRoot(routes),
        MatTabsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
