import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxDragAndDropComponent} from './ngx-drag-and-drop.component';
import {DndModule} from 'ngx-drag-drop';
import { NgxDragAndDropDragImageComponent } from './ngx-drag-and-drop-drag-image/ngx-drag-and-drop-drag-image.component';


@NgModule({
    declarations: [NgxDragAndDropComponent, NgxDragAndDropDragImageComponent],
    imports: [
        CommonModule,
        DndModule
    ],
    exports: [NgxDragAndDropComponent]
})
export class NgxDragAndDropModule {
}
