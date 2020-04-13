import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxFolderComponent} from './ngx-folder/ngx-folder.component';
import {DndModule} from 'ngx-drag-drop';

@NgModule({
    declarations: [
        NgxFolderComponent
    ],
    imports: [
        CommonModule,
        DndModule,
    ],
    exports: [
        NgxFolderComponent,
    ]
})
export class NgxFolderModule {
}
