import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkDragAndDropComponent } from './cdk-drag-and-drop/cdk-drag-and-drop.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {AppTestInjectorComponent} from '../app-test-injector/app-test-injector.component';
import { ConnectListsDirective } from './cdk-drag-and-drop/connect-lists.directive';

@NgModule({
    declarations: [CdkDragAndDropComponent, AppTestInjectorComponent, ConnectListsDirective],
    exports: [
        CdkDragAndDropComponent
    ],
    imports: [
        CommonModule,
        DragDropModule
    ]
})
export class CdkDragAndDropModule { }
