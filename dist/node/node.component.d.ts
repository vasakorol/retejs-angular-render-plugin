import { ChangeDetectorRef } from '@angular/core';
import { NodeEditor, Node, Input as ReteInput, Output as ReteOutput, Control as ReteControl } from 'rete';
import { NodeService } from '../node.service';
import * as i0 from "@angular/core";
export declare class NodeComponent {
    protected service: NodeService;
    protected cdr: ChangeDetectorRef;
    editor: NodeEditor;
    node: Node;
    bindSocket: Function;
    bindControl: Function;
    constructor(service: NodeService, cdr: ChangeDetectorRef);
    ngOnInit(): void;
    get inputs(): ReteInput[];
    get outputs(): ReteOutput[];
    get controls(): ReteControl[];
    selected(): "selected" | "";
    static ɵfac: i0.ɵɵFactoryDeclaration<NodeComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NodeComponent, "ng-component", never, { "editor": { "alias": "editor"; "required": false; }; "node": { "alias": "node"; "required": false; }; "bindSocket": { "alias": "bindSocket"; "required": false; }; "bindControl": { "alias": "bindControl"; "required": false; }; }, {}, never, never, false, never>;
}
