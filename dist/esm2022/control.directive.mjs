import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./node.service";
export class ControlDirective {
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.2", ngImport: i0, type: ControlDirective, deps: [{ token: i0.ElementRef }, { token: i1.NodeService }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.1.2", type: ControlDirective, selector: "[rete-control]", inputs: { control: ["rete-control", "control"] }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.2", ngImport: i0, type: ControlDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[rete-control]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i1.NodeService }]; }, propDecorators: { control: [{
                type: Input,
                args: ['rete-control']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29udHJvbC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQXNCLE1BQU0sZUFBZSxDQUFDOzs7QUFPckUsTUFBTSxPQUFPLGdCQUFnQjtJQUdQO0lBQXdCO0lBRnJCLE9BQU8sQ0FBVztJQUV6QyxZQUFvQixFQUFjLEVBQVUsT0FBb0I7UUFBNUMsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQWE7SUFBRyxDQUFDO0lBRXBFLFFBQVE7UUFDTixJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDaEUsQ0FBQzt1R0FQVSxnQkFBZ0I7MkZBQWhCLGdCQUFnQjs7MkZBQWhCLGdCQUFnQjtrQkFINUIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2lCQUMzQjsySEFFd0IsT0FBTztzQkFBN0IsS0FBSzt1QkFBQyxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgRWxlbWVudFJlZiwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sIH0gZnJvbSAncmV0ZSc7XG5pbXBvcnQgeyBOb2RlU2VydmljZSB9IGZyb20gJy4vbm9kZS5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3JldGUtY29udHJvbF0nXG59KVxuZXhwb3J0IGNsYXNzIENvbnRyb2xEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoJ3JldGUtY29udHJvbCcpIGNvbnRyb2whOiBDb250cm9sO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgc2VydmljZTogTm9kZVNlcnZpY2UpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zZXJ2aWNlLmJpbmRDb250cm9sKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jb250cm9sKTtcbiAgfVxufVxuIl19