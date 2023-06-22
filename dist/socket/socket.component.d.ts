import { Socket, IO } from 'rete';
import { SocketType } from '../types';
import * as i0 from "@angular/core";
export declare class SocketComponent {
    socket: Socket;
    io: IO;
    get type(): SocketType;
    static ɵfac: i0.ɵɵFactoryDeclaration<SocketComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SocketComponent, "rete-socket", never, { "socket": { "alias": "socket"; "required": false; }; "io": { "alias": "io"; "required": false; }; }, {}, never, never, false, never>;
}
