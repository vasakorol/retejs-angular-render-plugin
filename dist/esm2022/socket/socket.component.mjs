import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Input as ReteInput } from 'rete';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class SocketComponent {
    socket;
    io;
    get type() {
        return this.io instanceof ReteInput ? 'input' : 'output';
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.2", ngImport: i0, type: SocketComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.2", type: SocketComponent, selector: "rete-socket", inputs: { socket: "socket", io: "io" }, ngImport: i0, template: `<div *ngIf="socket" class="socket" [ngClass]="[type, socket.name]" [title]="socket.name"></div>`, isInline: true, styles: [":host{display:inline-block}.socket{display:inline-block;cursor:pointer;border:1px solid white;border-radius:12px;width:24px;height:24px;margin:6px;vertical-align:middle;background:#96b38a;z-index:2;box-sizing:border-box}.socket:hover{border-width:4px}.socket.multiple{border-color:#ff0}.socket.output{margin-right:-12px}.socket.input{margin-left:-12px}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.2", ngImport: i0, type: SocketComponent, decorators: [{
            type: Component,
            args: [{ selector: 'rete-socket', template: `<div *ngIf="socket" class="socket" [ngClass]="[type, socket.name]" [title]="socket.name"></div>`, changeDetection: ChangeDetectionStrategy.OnPush, styles: [":host{display:inline-block}.socket{display:inline-block;cursor:pointer;border:1px solid white;border-radius:12px;width:24px;height:24px;margin:6px;vertical-align:middle;background:#96b38a;z-index:2;box-sizing:border-box}.socket:hover{border-width:4px}.socket.multiple{border-color:#ff0}.socket.output{margin-right:-12px}.socket.input{margin-left:-12px}\n"] }]
        }], propDecorators: { socket: [{
                type: Input
            }], io: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ja2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zb2NrZXQvc29ja2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRSxPQUFPLEVBQWMsS0FBSyxJQUFJLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7O0FBU3RELE1BQU0sT0FBTyxlQUFlO0lBQ2pCLE1BQU0sQ0FBVTtJQUNoQixFQUFFLENBQU07SUFFakIsSUFBSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsRUFBRSxZQUFZLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7SUFDM0QsQ0FBQzt1R0FOVSxlQUFlOzJGQUFmLGVBQWUsMkZBSmhCLGlHQUFpRzs7MkZBSWhHLGVBQWU7a0JBTjNCLFNBQVM7K0JBQ0UsYUFBYSxZQUNiLGlHQUFpRyxtQkFFMUYsdUJBQXVCLENBQUMsTUFBTTs4QkFHdEMsTUFBTTtzQkFBZCxLQUFLO2dCQUNHLEVBQUU7c0JBQVYsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTb2NrZXQsIElPLCBJbnB1dCBhcyBSZXRlSW5wdXQgfSBmcm9tICdyZXRlJztcbmltcG9ydCB7IFNvY2tldFR5cGUgfSBmcm9tICcuLi90eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3JldGUtc29ja2V0JyxcbiAgdGVtcGxhdGU6IGA8ZGl2ICpuZ0lmPVwic29ja2V0XCIgY2xhc3M9XCJzb2NrZXRcIiBbbmdDbGFzc109XCJbdHlwZSwgc29ja2V0Lm5hbWVdXCIgW3RpdGxlXT1cInNvY2tldC5uYW1lXCI+PC9kaXY+YCxcbiAgc3R5bGVVcmxzOiBbJy4vc29ja2V0LmNvbXBvbmVudC5zYXNzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFNvY2tldENvbXBvbmVudCB7XG4gIEBJbnB1dCgpIHNvY2tldCE6IFNvY2tldDtcbiAgQElucHV0KCkgaW8hOiBJTztcblxuICBnZXQgdHlwZSgpOiBTb2NrZXRUeXBlIHtcbiAgICByZXR1cm4gdGhpcy5pbyBpbnN0YW5jZW9mIFJldGVJbnB1dCA/ICdpbnB1dCcgOiAnb3V0cHV0JztcbiAgfVxufVxuIl19