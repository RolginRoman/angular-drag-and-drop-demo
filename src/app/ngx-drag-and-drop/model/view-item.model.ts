export interface ViewItem {
    readonly id: string;
    readonly name: string;
    readonly type: 'asset' | 'folder';
}
