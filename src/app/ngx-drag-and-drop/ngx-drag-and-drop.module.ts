import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxDragAndDropComponent} from './ngx-drag-and-drop.component';
import {DndModule} from 'ngx-drag-drop';
import {NgxAssetModule} from './ngx-asset/ngx-asset.module';
import {NgxFolderModule} from './ngx-folder/ngx-folder.module';

@NgModule({
    declarations: [NgxDragAndDropComponent],
    imports: [
        CommonModule,
        DndModule,
        NgxAssetModule,
        NgxFolderModule,
    ],
    exports: [NgxDragAndDropComponent]
})
export class NgxDragAndDropModule {
}
