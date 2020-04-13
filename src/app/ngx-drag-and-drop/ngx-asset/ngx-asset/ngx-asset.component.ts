import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {DndDragImageOffsetFunction} from 'ngx-drag-drop';

@Component({
    selector: 'app-ngx-asset',
    templateUrl: './ngx-asset.component.html',
    styleUrls: ['./ngx-asset.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxAssetComponent implements OnInit {

    @Input()
    public item: any;
    public dndOffsetFunction: DndDragImageOffsetFunction = () => ({x: 0, y: 0});

    constructor() {
    }

    ngOnInit(): void {
    }

}
