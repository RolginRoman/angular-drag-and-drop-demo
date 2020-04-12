import {Directive, Inject, Optional, Output, Self} from '@angular/core';
import {CdkDropList} from '@angular/cdk/drag-drop';
import {ConnectManagerService} from '../../connect-manager.service';
import {Observable} from 'rxjs';

@Directive({
    selector: '[appConnectLists]',
    exportAs: 'connector'
})
export class ConnectListsDirective {

    @Output()
    connected: Observable<CdkDropList[]> = new Observable<CdkDropList[]>();

    constructor(
        private connectManager: ConnectManagerService,
        @Optional() @Self() @Inject(CdkDropList) list: CdkDropList,
    ) {
        if (list) {
            this.connectManager.connect(list);
        }
        this.connected = this.connectManager.connected$;
        this.connected.subscribe(lists => console.log('actual connected', lists));
    }
}
