import { Component, OnInit, Injector, ComponentFactoryResolver, ViewContainerRef, Type } from '@angular/core';
import { Props } from './types';
import * as i0 from "@angular/core";
export declare class CustomComponent implements OnInit {
    private vcr;
    private injector;
    private factoryResolver;
    component: Type<Component>;
    props: Props;
    constructor(vcr: ViewContainerRef, injector: Injector, factoryResolver: ComponentFactoryResolver);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomComponent, "ng-component", never, { "component": { "alias": "component"; "required": false; }; "props": { "alias": "props"; "required": false; }; }, {}, never, never, false, never>;
}
