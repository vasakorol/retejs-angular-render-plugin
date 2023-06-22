import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createCustomElement } from '@angular/elements';
import { KebabPipe } from './kebab.pipe';
import { NodeComponent } from './node/node.component';
import { SocketComponent } from './socket/socket.component';
import { ControlDirective } from './control.directive';
import { SocketDirective } from './socket.directive';
import { CustomComponent } from './custom.component';
import * as i0 from "@angular/core";
export class ReteModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUV4RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7QUEyQnJELE1BQU0sT0FBTyxVQUFVO0lBQ3JCLFlBQVksUUFBa0I7UUFDNUIsTUFBTSxhQUFhLEdBQUcsbUJBQW1CLENBQUMsZUFBZSxFQUFFLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUN6RSxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUM7WUFBRSxjQUFjLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxhQUFhLENBQUMsQ0FBQztJQUNoRyxDQUFDO3VHQUpVLFVBQVU7d0dBQVYsVUFBVSxpQkF2Qm5CLGFBQWE7WUFDYixlQUFlO1lBQ2YsZUFBZTtZQUNmLGdCQUFnQjtZQUNoQixlQUFlO1lBQ2YsU0FBUyxhQUdULFlBQVksYUFPWixhQUFhO1lBQ2IsZUFBZTtZQUNmLGVBQWU7WUFDZixnQkFBZ0I7WUFDaEIsZUFBZTtZQUNmLFNBQVM7d0dBR0EsVUFBVSxhQWJWO1lBQ1QsU0FBUztZQUNULGdCQUFnQjtTQUNqQixZQUxDLFlBQVk7OzJGQWVILFVBQVU7a0JBekJ0QixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixhQUFhO3dCQUNiLGVBQWU7d0JBQ2YsZUFBZTt3QkFDZixnQkFBZ0I7d0JBQ2hCLGVBQWU7d0JBQ2YsU0FBUztxQkFDVjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsWUFBWTtxQkFDYjtvQkFDRCxTQUFTLEVBQUU7d0JBQ1QsU0FBUzt3QkFDVCxnQkFBZ0I7cUJBQ2pCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxhQUFhO3dCQUNiLGVBQWU7d0JBQ2YsZUFBZTt3QkFDZixnQkFBZ0I7d0JBQ2hCLGVBQWU7d0JBQ2YsU0FBUztxQkFDVjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IGNyZWF0ZUN1c3RvbUVsZW1lbnQgfSBmcm9tICdAYW5ndWxhci9lbGVtZW50cyc7XG5cbmltcG9ydCB7IEtlYmFiUGlwZSB9IGZyb20gJy4va2ViYWIucGlwZSc7XG5pbXBvcnQgeyBOb2RlQ29tcG9uZW50IH0gZnJvbSAnLi9ub2RlL25vZGUuY29tcG9uZW50JztcbmltcG9ydCB7IFNvY2tldENvbXBvbmVudCB9IGZyb20gJy4vc29ja2V0L3NvY2tldC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29udHJvbERpcmVjdGl2ZSB9IGZyb20gJy4vY29udHJvbC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgU29ja2V0RGlyZWN0aXZlIH0gZnJvbSAnLi9zb2NrZXQuZGlyZWN0aXZlJztcbmltcG9ydCB7IEN1c3RvbUNvbXBvbmVudCB9IGZyb20gJy4vY3VzdG9tLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIE5vZGVDb21wb25lbnQsXG4gICAgU29ja2V0Q29tcG9uZW50LFxuICAgIEN1c3RvbUNvbXBvbmVudCxcbiAgICBDb250cm9sRGlyZWN0aXZlLFxuICAgIFNvY2tldERpcmVjdGl2ZSxcbiAgICBLZWJhYlBpcGUsXG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgS2ViYWJQaXBlLFxuICAgIENvbnRyb2xEaXJlY3RpdmVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIE5vZGVDb21wb25lbnQsXG4gICAgQ3VzdG9tQ29tcG9uZW50LFxuICAgIFNvY2tldENvbXBvbmVudCxcbiAgICBDb250cm9sRGlyZWN0aXZlLFxuICAgIFNvY2tldERpcmVjdGl2ZSxcbiAgICBLZWJhYlBpcGVcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBSZXRlTW9kdWxlIHtcbiAgY29uc3RydWN0b3IoaW5qZWN0b3I6IEluamVjdG9yKSB7IC8vIFN0YXRpY0luamVjdG9yRXJyb3IgZHVlIHRvICducG0gbGluaydcbiAgICBjb25zdCBDdXN0b21FbGVtZW50ID0gY3JlYXRlQ3VzdG9tRWxlbWVudChDdXN0b21Db21wb25lbnQsIHsgaW5qZWN0b3IgfSk7XG4gICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQoJ3JldGUtZWxlbWVudCcpKSBjdXN0b21FbGVtZW50cy5kZWZpbmUoJ3JldGUtZWxlbWVudCcsIEN1c3RvbUVsZW1lbnQpO1xuICB9XG59XG4iXX0=