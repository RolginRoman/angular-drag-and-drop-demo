import {Component, ViewEncapsulation} from '@angular/core';
import {DragulaService} from 'ng2-dragula';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
    title = 'ng-dnd-example';
    navLinks: any = [{path: 'cdk', label: 'Cdk'}, {path: 'ngx', label: 'Ngx'}];

    constructor(private dragula: DragulaService) {
        dragula.createGroup('DRAGULA_FACTS', {
            copy: true,
        });
        dragula.drag().subscribe(console.log);
        dragula.dragend().subscribe(console.log);
    }
}
