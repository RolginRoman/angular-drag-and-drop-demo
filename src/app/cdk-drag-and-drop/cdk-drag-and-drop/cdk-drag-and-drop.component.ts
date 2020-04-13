import {Component, InjectionToken} from '@angular/core';
import {CdkDragDrop, CdkDragEnter, CdkDropList, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {ConnectManagerService} from '../../connect-manager.service';
import {CdkDrag} from '@angular/cdk/drag-drop/directives/drag';

interface ViewItem {
    readonly id: string;
    readonly name: string;
    readonly type: 'asset' | 'folder';
}

export const TEST_TOKEN = new InjectionToken<string>('APP_TEST_TOKEN');

@Component({
    selector: 'app-cdk-drag-and-drop',
    templateUrl: './cdk-drag-and-drop.component.html',
    styleUrls: ['./cdk-drag-and-drop.component.css'],
    providers: [
        {
            provide: TEST_TOKEN, useValue: 'parent'
        }
    ]
})
export class CdkDragAndDropComponent {
    public items: ViewItem[] = [];

    constructor(private connectManagerService: ConnectManagerService) {
        for (let i = 0; i < 2; i++) {
            const type = Math.random() < 0.5 ? 'folder' : 'asset';
            this.items.push({
                id: i.toString(),
                name: type + i,
                type
            });
        }
    }

    public enter() {
        console.log('checked');
        return true;
    }

    drop(event: CdkDragDrop<string[]>) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        } else {
            transferArrayItem(event.previousContainer.data,
                event.container.data,
                event.previousIndex,
                event.currentIndex);
        }
        console.log(event);
    }

    dropList(event: CdkDragDrop<any>) {
        console.log('drop list');
        console.log(event);
    }

    dragDrop(event: CdkDragDrop<any>) {
        console.log('drop');
        console.log(event);
    }

    enterList(event: CdkDragEnter<any>) {
        console.log('entered', event);
    }

    assetDragEntered(event: CdkDragEnter<any>) {
        console.log('entered from asset', event);
    }

    folderDragEntered(event: CdkDragEnter<any>) {
        console.log('entered from folder', event);
    }

    trackBy(index, item) {
        return item.id;
    }

    assetEnterPredicate(drag: CdkDrag, drop: CdkDropList): boolean {
        return false;
    }

    folderEnterPredicate(drag: CdkDrag, drop: CdkDropList): boolean {
        return true;
    }

    onNativeDrop(event: DragEvent) {
        console.log('Native drop from cdk drag', event);
    }
}
