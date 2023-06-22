import { Directive, Input } from '@angular/core';
import { Input as ReteInput } from 'rete';
import * as i0 from "@angular/core";
import * as i1 from "./node.service";
export class SocketDirective {
    el;
    service;
    io;
    constructor(el, service) {
        this.el = el;
        this.service = service;
    }
    get type() {
        return this.io instanceof ReteInput ? 'input' : 'output';
    }
    ngOnInit() {
        this.service.bindSocket(this.el.nativeElement, this.type, this.io);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.2", ngImport: i0, type: SocketDirective, deps: [{ token: i0.ElementRef }, { token: i1.NodeService }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.1.2", type: SocketDirective, selector: "[rete-socket]", inputs: { io: "io" }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.2", ngImport: i0, type: SocketDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[rete-socket]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i1.NodeService }]; }, propDecorators: { io: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ja2V0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zb2NrZXQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFzQixNQUFNLGVBQWUsQ0FBQztBQUNyRSxPQUFPLEVBQU0sS0FBSyxJQUFJLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7O0FBTzlDLE1BQU0sT0FBTyxlQUFlO0lBR0o7SUFBd0I7SUFGbkMsRUFBRSxDQUFNO0lBRWpCLFlBQW9CLEVBQWMsRUFBVSxPQUFvQjtRQUE1QyxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBYTtJQUFHLENBQUM7SUFFcEUsSUFBSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsRUFBRSxZQUFZLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7SUFDM0QsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNyRSxDQUFDO3VHQVhRLGVBQWU7MkZBQWYsZUFBZTs7MkZBQWYsZUFBZTtrQkFIM0IsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsZUFBZTtpQkFDMUI7MkhBRVksRUFBRTtzQkFBVixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgRWxlbWVudFJlZiwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJTywgSW5wdXQgYXMgUmV0ZUlucHV0IH0gZnJvbSAncmV0ZSc7XG5pbXBvcnQgeyBOb2RlU2VydmljZSB9IGZyb20gJy4vbm9kZS5zZXJ2aWNlJztcbmltcG9ydCB7IFNvY2tldFR5cGUgfSBmcm9tICcuL3R5cGVzJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3JldGUtc29ja2V0XSdcbn0pXG5leHBvcnQgY2xhc3MgU29ja2V0RGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBASW5wdXQoKSBpbyE6IElPO1xuICBcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIHNlcnZpY2U6IE5vZGVTZXJ2aWNlKSB7fVxuICBcbiAgICBnZXQgdHlwZSgpOiBTb2NrZXRUeXBlIHtcbiAgICAgIHJldHVybiB0aGlzLmlvIGluc3RhbmNlb2YgUmV0ZUlucHV0ID8gJ2lucHV0JyA6ICdvdXRwdXQnO1xuICAgIH1cbiAgXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICB0aGlzLnNlcnZpY2UuYmluZFNvY2tldCh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMudHlwZSwgdGhpcy5pbyk7XG4gICAgfVxufVxuIl19