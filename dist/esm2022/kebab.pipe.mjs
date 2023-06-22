import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class KebabPipe {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2ViYWIucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9rZWJhYi5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDOztBQUtwRCxNQUFNLE9BQU8sU0FBUztJQUVwQixPQUFPLENBQUMsQ0FBUztRQUNmLE9BQU8sQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVELFNBQVMsQ0FBQyxLQUFnQjtRQUN4QixPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdEYsQ0FBQzt1R0FSVSxTQUFTO3FHQUFULFNBQVM7OzJGQUFULFNBQVM7a0JBRHJCLElBQUk7bUJBQUMsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG50eXBlIENsYXNzQXR0ciA9IHN0cmluZyB8IHN0cmluZ1tdO1xuXG5AUGlwZSh7bmFtZTogJ2tlYmFiJ30pXG5leHBvcnQgY2xhc3MgS2ViYWJQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgcmVwbGFjZShzOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gcy50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoLyAvZywgJy0nKTtcbiAgfVxuXG4gIHRyYW5zZm9ybSh2YWx1ZTogQ2xhc3NBdHRyKTogQ2xhc3NBdHRyIHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZS5tYXAocyA9PiB0aGlzLnJlcGxhY2UocykpIDogdGhpcy5yZXBsYWNlKHZhbHVlKTtcbiAgfVxufSJdfQ==