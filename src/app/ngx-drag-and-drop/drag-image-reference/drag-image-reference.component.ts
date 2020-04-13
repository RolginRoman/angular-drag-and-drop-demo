import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {map, startWith} from 'rxjs/operators';
import {interval, Observable} from 'rxjs';

@Component({
    selector: 'app-drag-image-reference',
    templateUrl: './drag-image-reference.component.html',
    styleUrls: ['./drag-image-reference.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DragImageReferenceComponent implements OnInit {
    public selector$: Observable<string>;

    constructor() {
    }

    ngOnInit(): void {
        this.selector$ = interval(2000).pipe(
            startWith(-1),
            map(i => `Dragged ${i}`)
        );
    }

}
