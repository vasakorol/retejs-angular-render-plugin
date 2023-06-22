import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import * as i0 from "@angular/core";
export class CustomComponent {
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
                type: Input
            }], props: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jdXN0b20uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFzRSx1QkFBdUIsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFPOUksTUFBTSxPQUFPLGVBQWU7SUFLaEI7SUFDQTtJQUNBO0lBTkQsU0FBUyxDQUFtQjtJQUM1QixLQUFLLENBQVM7SUFFdkIsWUFDVSxHQUFxQixFQUNyQixRQUFrQixFQUNsQixlQUF5QztRQUZ6QyxRQUFHLEdBQUgsR0FBRyxDQUFrQjtRQUNyQixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLG9CQUFlLEdBQWYsZUFBZSxDQUEwQjtJQUNoRCxDQUFDO0lBRUosUUFBUTtRQUNOLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzdFLE1BQU0sWUFBWSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ25ELE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFFdkIsS0FBSSxJQUFJLEdBQUcsSUFBSSxLQUFLLEVBQUU7WUFDcEIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRTtnQkFDaEQsR0FBRyxLQUFLLE9BQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDNUIsR0FBRyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUMvQixDQUFDLENBQUE7U0FDSDtRQUVELElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JCLENBQUM7dUdBM0JVLGVBQWU7MkZBQWYsZUFBZSx3R0FIZCxFQUFFOzsyRkFHSCxlQUFlO2tCQUozQixTQUFTO21CQUFDO29CQUNQLFFBQVEsRUFBRSxFQUFFO29CQUNaLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNsRDtxS0FFVSxTQUFTO3NCQUFqQixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgSW5qZWN0b3IsIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgVmlld0NvbnRhaW5lclJlZiwgVHlwZSwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFByb3BzIH0gZnJvbSAnLi90eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHRlbXBsYXRlOiAnJyxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBDdXN0b21Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBjb21wb25lbnQhOiBUeXBlPENvbXBvbmVudD47XG4gIEBJbnB1dCgpIHByb3BzITogUHJvcHM7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB2Y3I6IFZpZXdDb250YWluZXJSZWYsXG4gICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgcHJpdmF0ZSBmYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlclxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgY29uc3QgZmFjdG9yeSA9IHRoaXMuZmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KHRoaXMuY29tcG9uZW50KTtcbiAgICBjb25zdCBjb21wb25lbnRSZWYgPSBmYWN0b3J5LmNyZWF0ZSh0aGlzLmluamVjdG9yKTtcbiAgICBjb25zdCB7IHByb3BzIH0gPSB0aGlzO1xuXG4gICAgZm9yKGxldCBrZXkgaW4gcHJvcHMpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb21wb25lbnRSZWYuaW5zdGFuY2UsIGtleSwge1xuICAgICAgICBnZXQoKSB7IHJldHVybiBwcm9wc1trZXldOyB9LFxuICAgICAgICBzZXQodmFsKSB7IHByb3BzW2tleV0gPSB2YWw7IH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgdGhpcy52Y3IuaW5zZXJ0KGNvbXBvbmVudFJlZi5ob3N0Vmlldyk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnZjci5kZXRhY2goMCk7XG4gIH1cbn1cbiJdfQ==