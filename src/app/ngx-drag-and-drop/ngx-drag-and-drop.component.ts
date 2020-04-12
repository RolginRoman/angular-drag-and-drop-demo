import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {DndDropEvent} from 'ngx-drag-drop';

interface ViewItem {
    readonly id: string;
    readonly name: string;
    readonly type: 'asset' | 'folder';
}

@Component({
    selector: 'app-ngx-drag-and-drop',
    templateUrl: './ngx-drag-and-drop.component.html',
    styleUrls: ['./ngx-drag-and-drop.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxDragAndDropComponent implements OnInit {

    public items: ViewItem[] = [];

    constructor() {
        for (let i = 0; i < 10; i++) {
            const type = Math.random() < 0.3 ? 'folder' : 'asset';
            this.items.push({
                id: i.toString(),
                name: type + i,
                type
            });
        }
    }

    trackBy(index, item) {
        return item.id;
    }

    ngOnInit(): void {
    }

    onDrop(item: ViewItem, event: DndDropEvent) {
        console.log('drop event. Item:', event.data, 'to', item);
    }
}
