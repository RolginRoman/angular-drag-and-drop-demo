import {Injectable} from '@angular/core';
import {CdkDropList} from '@angular/cdk/drag-drop';
import {ReplaySubject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ConnectManagerService {
    public connected$: ReplaySubject<CdkDropList[]> = new ReplaySubject<CdkDropList[]>(1);
    private allConnected: CdkDropList[];

    constructor() {
        console.log('manager initiated');
    }

    connect(list: CdkDropList) {
        if (!list) {
            throw new Error('Drag and Drop cannot be connected to undefined list');
        }
        this.allConnected = [...(this.allConnected || []), list];
        this.emit();
    }

    disconnect(list: CdkDropList) {
        this.allConnected = this.allConnected.filter(item => item !== list);
        this.emit();
    }

    private emit() {
        this.connected$.next(this.allConnected);
    }
}
