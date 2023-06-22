import { ElementRef, OnInit } from '@angular/core';
import { IO } from 'rete';
import { NodeService } from './node.service';
import { SocketType } from './types';
import * as i0 from "@angular/core";
export declare class SocketDirective implements OnInit {
    private el;
    private service;
    io: IO;
    constructor(el: ElementRef, service: NodeService);
    get type(): SocketType;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SocketDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<SocketDirective, "[rete-socket]", never, { "io": { "alias": "io"; "required": false; }; }, {}, never, never, false, never>;
}
