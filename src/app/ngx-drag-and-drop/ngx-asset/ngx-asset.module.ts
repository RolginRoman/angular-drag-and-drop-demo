import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxAssetComponent} from './ngx-asset/ngx-asset.component';
import {DndModule} from 'ngx-drag-drop';
import {NgxDragAndDropDragImageComponent} from '../ngx-drag-and-drop-drag-image/ngx-drag-and-drop-drag-image.component';
import {DragImageReferenceComponent} from '../drag-image-reference/drag-image-reference.component';

@NgModule({
    declarations: [NgxAssetComponent, NgxDragAndDropDragImageComponent, DragImageReferenceComponent],
    imports: [
        CommonModule,
        DndModule,
    ],
    exports: [NgxAssetComponent]
})
export class NgxAssetModule {
}
