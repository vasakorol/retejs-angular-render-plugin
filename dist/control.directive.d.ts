import { ElementRef, OnInit } from '@angular/core';
import { Control } from 'rete';
import { NodeService } from './node.service';
import * as i0 from "@angular/core";
export declare class ControlDirective implements OnInit {
    private el;
    private service;
    control: Control;
    constructor(el: ElementRef, service: NodeService);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ControlDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ControlDirective, "[rete-control]", never, { "control": { "alias": "rete-control"; "required": false; }; }, {}, never, never, false, never>;
}
