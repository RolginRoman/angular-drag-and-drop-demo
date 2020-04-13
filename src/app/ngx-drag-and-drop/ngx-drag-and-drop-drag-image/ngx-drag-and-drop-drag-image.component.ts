import {
    ChangeDetectionStrategy,
    Component,
    ComponentFactoryResolver,
    ComponentRef,
    ElementRef,
    Injector,
    OnDestroy,
    OnInit,
    ViewContainerRef
} from '@angular/core';
import {DndDraggableDirective} from 'ngx-drag-drop';
import {DragImageReferenceComponent} from '../drag-image-reference/drag-image-reference.component';
import {Subject} from 'rxjs';

function getElementRef(componentRef: ComponentRef<unknown>): ElementRef {
    return componentRef.location;
}

@Component({
    selector: 'app-ngx-drag-and-drop-drag-image',
    templateUrl: './ngx-drag-and-drop-drag-image.component.html',
    styleUrls: ['./ngx-drag-and-drop-drag-image.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxDragAndDropDragImageComponent implements OnInit, OnDestroy {

    private destroy$: Subject<void> = new Subject<void>();

    constructor(
        private draggableTarget: DndDraggableDirective,
        private viewContainerRef: ViewContainerRef,
        private componentFactory: ComponentFactoryResolver,
        private injector: Injector,
    ) {
    }

    ngOnInit(): void {
        // this.draggableTarget.dndStart
        //     .pipe(takeUntil(this.destroy$))
        //     .subscribe(() => {
        const dragImageFactory = this.componentFactory.resolveComponentFactory(DragImageReferenceComponent);
        const componentRef = this.viewContainerRef.createComponent(dragImageFactory, 0, this.injector);
        this.draggableTarget.registerDragImage(getElementRef(componentRef));
        // });
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

}
