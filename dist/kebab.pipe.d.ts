import { PipeTransform } from '@angular/core';
import * as i0 from "@angular/core";
type ClassAttr = string | string[];
export declare class KebabPipe implements PipeTransform {
    replace(s: string): string;
    transform(value: ClassAttr): ClassAttr;
    static ɵfac: i0.ɵɵFactoryDeclaration<KebabPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<KebabPipe, "kebab", false>;
}
export {};
