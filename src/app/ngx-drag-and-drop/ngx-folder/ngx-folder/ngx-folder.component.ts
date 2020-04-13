import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {DndDropEvent} from 'ngx-drag-drop';
import {ViewItem} from '../../model/view-item.model';

@Component({
    selector: 'app-ngx-folder',
    templateUrl: './ngx-folder.component.html',
    styleUrls: ['./ngx-folder.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxFolderComponent implements OnInit {

    @Input()
    public item: any;

    constructor() {
    }

    ngOnInit(): void {
    }

    onDrop(item: ViewItem, event: DndDropEvent) {
        console.log('drop event. Item:', event.data, 'to', item);
    }
}
