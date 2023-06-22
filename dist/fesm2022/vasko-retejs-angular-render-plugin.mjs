import * as i0 from '@angular/core';
import { Injectable, Component, ChangeDetectionStrategy, Input as Input$1, Directive, Pipe, NgModule } from '@angular/core';
import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';
import { Input } from 'rete';
import { createCustomElement } from '@angular/elements';

class NodeService {
    bindSocket;
    bindControl;
    setBindings(bindSocket, bindControl) {
        this.bindSocket = bindSocket;
        this.bindControl = bindControl;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.2", ngImport: i0, type: NodeService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.1.2", ngImport: i0, type: NodeService });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.2", ngImport: i0, type: NodeService, decorators: [{
            type: Injectable
        }] });

class SocketComponent {
    socket;
    io;
    get type() {
        return this.io instanceof Input ? 'input' : 'output';
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.2", ngImport: i0, type: SocketComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.2", type: SocketComponent, selector: "rete-socket", inputs: { socket: "socket", io: "io" }, ngImport: i0, template: `<div *ngIf="socket" class="socket" [ngClass]="[type, socket.name]" [title]="socket.name"></div>`, isInline: true, styles: [":host{display:inline-block}.socket{display:inline-block;cursor:pointer;border:1px solid white;border-radius:12px;width:24px;height:24px;margin:6px;vertical-align:middle;background:#96b38a;z-index:2;box-sizing:border-box}.socket:hover{border-width:4px}.socket.multiple{border-color:#ff0}.socket.output{margin-right:-12px}.socket.input{margin-left:-12px}\n"], dependencies: [{ kind: "directive", type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.2", ngImport: i0, type: SocketComponent, decorators: [{
            type: Component,
            args: [{ selector: 'rete-socket', template: `<div *ngIf="socket" class="socket" [ngClass]="[type, socket.name]" [title]="socket.name"></div>`, changeDetection: ChangeDetectionStrategy.OnPush, styles: [":host{display:inline-block}.socket{display:inline-block;cursor:pointer;border:1px solid white;border-radius:12px;width:24px;height:24px;margin:6px;vertical-align:middle;background:#96b38a;z-index:2;box-sizing:border-box}.socket:hover{border-width:4px}.socket.multiple{border-color:#ff0}.socket.output{margin-right:-12px}.socket.input{margin-left:-12px}\n"] }]
        }], propDecorators: { socket: [{
                type: Input$1
            }], io: [{
                type: Input$1
            }] } });

class ControlDirective {
    el;
    service;
    control;
    constructor(el, service) {
        this.el = el;
        this.service = service;
    }
    ngOnInit() {
        this.service.bindControl(this.el.nativeElement, this.control);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.2", ngImport: i0, type: ControlDirective, deps: [{ token: i0.ElementRef }, { token: NodeService }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.1.2", type: ControlDirective, selector: "[rete-control]", inputs: { control: ["rete-control", "control"] }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.2", ngImport: i0, type: ControlDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[rete-control]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: NodeService }]; }, propDecorators: { control: [{
                type: Input$1,
                args: ['rete-control']
            }] } });

class SocketDirective {
    el;
    service;
    io;
    constructor(el, service) {
        this.el = el;
        this.service = service;
    }
    get type() {
        return this.io instanceof Input ? 'input' : 'output';
    }
    ngOnInit() {
        this.service.bindSocket(this.el.nativeElement, this.type, this.io);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.2", ngImport: i0, type: SocketDirective, deps: [{ token: i0.ElementRef }, { token: NodeService }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.1.2", type: SocketDirective, selector: "[rete-socket]", inputs: { io: "io" }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.2", ngImport: i0, type: SocketDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[rete-socket]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: NodeService }]; }, propDecorators: { io: [{
                type: Input$1
            }] } });

class KebabPipe {
    replace(s) {
        return s.toLowerCase().replace(/ /g, '-');
    }
    transform(value) {
        return Array.isArray(value) ? value.map(s => this.replace(s)) : this.replace(value);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.2", ngImport: i0, type: KebabPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
    static ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.1.2", ngImport: i0, type: KebabPipe, name: "kebab" });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.2", ngImport: i0, type: KebabPipe, decorators: [{
            type: Pipe,
            args: [{ name: 'kebab' }]
        }] });

class NodeComponent {
    service;
    cdr;
    editor;
    node;
    bindSocket;
    bindControl;
    constructor(service, cdr) {
        this.service = service;
        this.cdr = cdr;
    }
    ngOnInit() {
        this.service.setBindings(this.bindSocket, this.bindControl);
        this.node.update = () => this.cdr.detectChanges();
    }
    get inputs() {
        return Array.from(this.node.inputs.values());
    }
    get outputs() {
        return Array.from(this.node.outputs.values());
    }
    get controls() {
        return Array.from(this.node.controls.values());
    }
    selected() {
        return this.editor.selected.contains(this.node) ? 'selected' : '';
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.2", ngImport: i0, type: NodeComponent, deps: [{ token: NodeService }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.2", type: NodeComponent, selector: "ng-component", inputs: { editor: "editor", node: "node", bindSocket: "bindSocket", bindControl: "bindControl" }, providers: [NodeService], ngImport: i0, template: "<div class=\"node\" [ngClass]=\"[selected(), node.name] | kebab\">\n    <div class=\"title\">{{node.name}}</div>\n    <div class=\"output\" *ngFor=\"let output of outputs\">\n        <div class=\"output-title\">{{output.name}}</div>\n        <rete-socket rete-socket [io]=\"output\" [socket]=\"output.socket\"></rete-socket>\n    </div>\n    <div class=\"control\" *ngFor=\"let control of controls\" [rete-control]=\"control\"></div>\n    <div class=\"input\" *ngFor=\"let input of inputs\">\n        <rete-socket rete-socket [io]=\"input\" [socket]=\"input.socket\"></rete-socket>\n        <div class=\"input-title\" *ngIf=\"!input.showControl()\">{{input.name}}</div>\n        <div class=\"input-control\" *ngIf=\"input.showControl()\" [rete-control]=\"input.control\"></div>\n    </div>\n</div>", styles: [".node{background:rgba(110,136,255,.8);border:2px solid #4e58bf;border-radius:10px;cursor:pointer;min-width:180px;height:auto;padding-bottom:6px;box-sizing:content-box;position:relative;-webkit-user-select:none;user-select:none}.node:hover{background:rgba(130,153,255,.8)}.node.selected{background:#ffd92c;border-color:#e3c000}.node .title{color:#fff;font-family:sans-serif;font-size:18px;padding:8px}.node .output{text-align:right}.node .input{text-align:left}.node .input-title,.node .output-title{vertical-align:middle;color:#fff;display:inline-block;font-family:sans-serif;font-size:14px;margin:6px;line-height:24px}.node .input-title[hidden],.node .output-title[hidden]{display:none}.node .input-control{z-index:1;width:calc(100% - 36px);vertical-align:middle;display:inline-block}.node .control{padding:6px 18px}\n"], dependencies: [{ kind: "directive", type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: SocketComponent, selector: "rete-socket", inputs: ["socket", "io"] }, { kind: "directive", type: ControlDirective, selector: "[rete-control]", inputs: ["rete-control"] }, { kind: "directive", type: SocketDirective, selector: "[rete-socket]", inputs: ["io"] }, { kind: "pipe", type: KebabPipe, name: "kebab" }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.2", ngImport: i0, type: NodeComponent, decorators: [{
            type: Component,
            args: [{ providers: [NodeService], changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"node\" [ngClass]=\"[selected(), node.name] | kebab\">\n    <div class=\"title\">{{node.name}}</div>\n    <div class=\"output\" *ngFor=\"let output of outputs\">\n        <div class=\"output-title\">{{output.name}}</div>\n        <rete-socket rete-socket [io]=\"output\" [socket]=\"output.socket\"></rete-socket>\n    </div>\n    <div class=\"control\" *ngFor=\"let control of controls\" [rete-control]=\"control\"></div>\n    <div class=\"input\" *ngFor=\"let input of inputs\">\n        <rete-socket rete-socket [io]=\"input\" [socket]=\"input.socket\"></rete-socket>\n        <div class=\"input-title\" *ngIf=\"!input.showControl()\">{{input.name}}</div>\n        <div class=\"input-control\" *ngIf=\"input.showControl()\" [rete-control]=\"input.control\"></div>\n    </div>\n</div>", styles: [".node{background:rgba(110,136,255,.8);border:2px solid #4e58bf;border-radius:10px;cursor:pointer;min-width:180px;height:auto;padding-bottom:6px;box-sizing:content-box;position:relative;-webkit-user-select:none;user-select:none}.node:hover{background:rgba(130,153,255,.8)}.node.selected{background:#ffd92c;border-color:#e3c000}.node .title{color:#fff;font-family:sans-serif;font-size:18px;padding:8px}.node .output{text-align:right}.node .input{text-align:left}.node .input-title,.node .output-title{vertical-align:middle;color:#fff;display:inline-block;font-family:sans-serif;font-size:14px;margin:6px;line-height:24px}.node .input-title[hidden],.node .output-title[hidden]{display:none}.node .input-control{z-index:1;width:calc(100% - 36px);vertical-align:middle;display:inline-block}.node .control{padding:6px 18px}\n"] }]
        }], ctorParameters: function () { return [{ type: NodeService }, { type: i0.ChangeDetectorRef }]; }, propDecorators: { editor: [{
                type: Input$1
            }], node: [{
                type: Input$1
            }], bindSocket: [{
                type: Input$1
            }], bindControl: [{
                type: Input$1
            }] } });

class CustomComponent {
    vcr;
    injector;
    factoryResolver;
    component;
    props;
    constructor(vcr, injector, factoryResolver) {
        this.vcr = vcr;
        this.injector = injector;
        this.factoryResolver = factoryResolver;
    }
    ngOnInit() {
        const factory = this.factoryResolver.resolveComponentFactory(this.component);
        const componentRef = factory.create(this.injector);
        const { props } = this;
        for (let key in props) {
            Object.defineProperty(componentRef.instance, key, {
                get() { return props[key]; },
                set(val) { props[key] = val; }
            });
        }
        this.vcr.insert(componentRef.hostView);
    }
    ngOnDestroy() {
        this.vcr.detach(0);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.2", ngImport: i0, type: CustomComponent, deps: [{ token: i0.ViewContainerRef }, { token: i0.Injector }, { token: i0.ComponentFactoryResolver }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.2", type: CustomComponent, selector: "ng-component", inputs: { component: "component", props: "props" }, ngImport: i0, template: '', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.2", ngImport: i0, type: CustomComponent, decorators: [{
            type: Component,
            args: [{
                    template: '',
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }, { type: i0.Injector }, { type: i0.ComponentFactoryResolver }]; }, propDecorators: { component: [{
                type: Input$1
            }], props: [{
                type: Input$1
            }] } });

class ReteModule {
    constructor(injector) {
        const CustomElement = createCustomElement(CustomComponent, { injector });
        if (!customElements.get('rete-element'))
            customElements.define('rete-element', CustomElement);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.2", ngImport: i0, type: ReteModule, deps: [{ token: i0.Injector }], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.1.2", ngImport: i0, type: ReteModule, declarations: [NodeComponent,
            SocketComponent,
            CustomComponent,
            ControlDirective,
            SocketDirective,
            KebabPipe], imports: [CommonModule], exports: [NodeComponent,
            CustomComponent,
            SocketComponent,
            ControlDirective,
            SocketDirective,
            KebabPipe] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.1.2", ngImport: i0, type: ReteModule, providers: [
            KebabPipe,
            ControlDirective
        ], imports: [CommonModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.2", ngImport: i0, type: ReteModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        NodeComponent,
                        SocketComponent,
                        CustomComponent,
                        ControlDirective,
                        SocketDirective,
                        KebabPipe,
                    ],
                    imports: [
                        CommonModule
                    ],
                    providers: [
                        KebabPipe,
                        ControlDirective
                    ],
                    exports: [
                        NodeComponent,
                        CustomComponent,
                        SocketComponent,
                        ControlDirective,
                        SocketDirective,
                        KebabPipe
                    ]
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }]; } });

function install(editor, params = {}) {
    editor.on('rendernode', ({ el, node, component, bindControl, bindSocket }) => {
        const ngComponent = component;
        if (ngComponent.render && ngComponent.render !== 'angular')
            return;
        const element = document.createElement('rete-element');
        const props = element;
        props.component = ngComponent.component || params.component || NodeComponent;
        props.props = Object.assign({}, ngComponent.props || {}, {
            node,
            editor,
            bindControl,
            bindSocket
        });
        el.appendChild(element);
    });
    editor.on('rendercontrol', ({ el, control }) => {
        const ngControl = control;
        if (ngControl.render && ngControl.render !== 'angular')
            return;
        const element = document.createElement('rete-element');
        const props = element;
        props.component = ngControl.component;
        props.props = ngControl.props;
        el.appendChild(element);
    });
    editor.on(['connectioncreated', 'connectionremoved'], connection => {
        connection.output.node.update();
        connection.input.node.update();
    });
    editor.on('nodeselected', () => {
        editor.nodes.forEach(n => n.update());
    });
}
const AngularRenderPlugin = {
    name: 'angular-render',
    install
};

/**
 * Generated bundle index. Do not edit.
 */

export { AngularRenderPlugin, ControlDirective, CustomComponent, KebabPipe, NodeComponent, NodeService, ReteModule, SocketComponent, SocketDirective };
//# sourceMappingURL=vasko-retejs-angular-render-plugin.mjs.map
