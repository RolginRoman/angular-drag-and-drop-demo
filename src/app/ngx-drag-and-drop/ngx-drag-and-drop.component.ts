import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ViewItem} from './model/view-item.model';

@Component({
    selector: 'app-ngx-drag-and-drop',
    templateUrl: './ngx-drag-and-drop.component.html',
    styleUrls: ['./ngx-drag-and-drop.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
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
}
