import {Component, Inject, Injector, Input, OnInit, Optional} from '@angular/core';
import {TEST_TOKEN} from '../cdk-drag-and-drop/cdk-drag-and-drop/cdk-drag-and-drop.component';
import {CdkDrag, CdkDropList, CdkDropListGroup} from '@angular/cdk/drag-drop';
import {ConnectListsDirective} from '../cdk-drag-and-drop/cdk-drag-and-drop/connect-lists.directive';

@Component({
    selector: 'app-test-injector',
    templateUrl: './app-test-injector.component.html',
    styleUrls: ['./app-test-injector.component.css']
})
export class AppTestInjectorComponent implements OnInit {

    @Input()
    public source: string;

    @Input()
    public connectedLists: CdkDropList[];

    @Input()
    public connector: ConnectListsDirective;

    constructor(
        private injector: Injector,
        @Inject(TEST_TOKEN) public value: string,
        @Optional() @Inject(CdkDrag) public parentDrag: CdkDrag,
        @Optional() @Inject(CdkDropList) public parentList: CdkDropList,
        @Optional() @Inject(CdkDropListGroup) public parentGroup: CdkDropListGroup<any>,
    ) {
    }

    ngOnInit(): void {
        console.log(this.source, this);
        if (this.connector) {
            this.connector.connected.subscribe(value => console.log('value from directive sub', value));
        }
        console.log('Input lists', this.connectedLists);
    }

}
