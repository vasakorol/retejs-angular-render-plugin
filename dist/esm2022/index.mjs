import { NodeComponent } from './node/node.component';
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
export const AngularRenderPlugin = {
    name: 'angular-render',
    install
};
export { ReteModule } from './module';
export * from './types';
export { NodeService } from './node.service';
export { NodeComponent } from './node/node.component';
export { SocketComponent } from './socket/socket.component';
export { KebabPipe } from './kebab.pipe';
export { ControlDirective } from './control.directive';
export { SocketDirective } from './socket.directive';
export { CustomComponent } from './custom.component';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0EsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRXRELFNBQVMsT0FBTyxDQUFDLE1BQWtCLEVBQUUsU0FBcUMsRUFBRTtJQUN4RSxNQUFNLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUU7UUFDekUsTUFBTSxXQUFXLEdBQUcsU0FBNEMsQ0FBQztRQUVqRSxJQUFJLFdBQVcsQ0FBQyxNQUFNLElBQUksV0FBVyxDQUFDLE1BQU0sS0FBSyxTQUFTO1lBQUUsT0FBTztRQUVuRSxNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3ZELE1BQU0sS0FBSyxHQUFpQixPQUFjLENBQUM7UUFFM0MsS0FBSyxDQUFDLFNBQVMsR0FBRyxXQUFXLENBQUMsU0FBUyxJQUFJLE1BQU0sQ0FBQyxTQUFTLElBQUksYUFBYSxDQUFDO1FBQzdFLEtBQUssQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsV0FBVyxDQUFDLEtBQUssSUFBSSxFQUFFLEVBQUU7WUFDckQsSUFBSTtZQUNKLE1BQU07WUFDTixXQUFXO1lBQ1gsVUFBVTtTQUNiLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDNUIsQ0FBQyxDQUFDLENBQUM7SUFFSCxNQUFNLENBQUMsRUFBRSxDQUFDLGVBQWUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7UUFDM0MsTUFBTSxTQUFTLEdBQUcsT0FBb0MsQ0FBQztRQUV2RCxJQUFJLFNBQVMsQ0FBQyxNQUFNLElBQUksU0FBUyxDQUFDLE1BQU0sS0FBSyxTQUFTO1lBQUUsT0FBTztRQUUvRCxNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3ZELE1BQU0sS0FBSyxHQUFpQixPQUFjLENBQUM7UUFFM0MsS0FBSyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDO1FBQ3RDLEtBQUssQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQztRQUU5QixFQUFFLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzVCLENBQUMsQ0FBQyxDQUFDO0lBQ0gsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLG1CQUFtQixFQUFFLG1CQUFtQixDQUFDLEVBQUUsVUFBVSxDQUFDLEVBQUU7UUFDL0QsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDaEMsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDbkMsQ0FBQyxDQUFDLENBQUM7SUFDSCxNQUFNLENBQUMsRUFBRSxDQUFDLGNBQWMsRUFBRSxHQUFHLEVBQUU7UUFDM0IsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUMxQyxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUM7QUFFRCxNQUFNLENBQUMsTUFBTSxtQkFBbUIsR0FBRztJQUMvQixJQUFJLEVBQUUsZ0JBQWdCO0lBQ3RCLE9BQU87Q0FDVixDQUFDO0FBQ0YsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUN0QyxjQUFjLFNBQVMsQ0FBQztBQUN4QixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOb2RlRWRpdG9yIH0gZnJvbSAncmV0ZSc7XG5pbXBvcnQgeyBBbmd1bGFyQ29udHJvbCwgRWxlbWVudFByb3BzLCBBbmd1bGFyQ29tcG9uZW50RGF0YSB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgTm9kZUNvbXBvbmVudCB9IGZyb20gJy4vbm9kZS9ub2RlLmNvbXBvbmVudCc7XG5cbmZ1bmN0aW9uIGluc3RhbGwoZWRpdG9yOiBOb2RlRWRpdG9yLCBwYXJhbXMgOiB7IGNvbXBvbmVudD86IFR5cGU8YW55PiB9ID0ge30pIHtcbiAgICBlZGl0b3Iub24oJ3JlbmRlcm5vZGUnLCAoeyBlbCwgbm9kZSwgY29tcG9uZW50LCBiaW5kQ29udHJvbCwgYmluZFNvY2tldCB9KSA9PiB7XG4gICAgICAgIGNvbnN0IG5nQ29tcG9uZW50ID0gY29tcG9uZW50IGFzIHVua25vd24gYXMgQW5ndWxhckNvbXBvbmVudERhdGE7XG5cbiAgICAgICAgaWYgKG5nQ29tcG9uZW50LnJlbmRlciAmJiBuZ0NvbXBvbmVudC5yZW5kZXIgIT09ICdhbmd1bGFyJykgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdyZXRlLWVsZW1lbnQnKTtcbiAgICAgICAgY29uc3QgcHJvcHM6IEVsZW1lbnRQcm9wcyA9IGVsZW1lbnQgYXMgYW55O1xuXG4gICAgICAgIHByb3BzLmNvbXBvbmVudCA9IG5nQ29tcG9uZW50LmNvbXBvbmVudCB8fCBwYXJhbXMuY29tcG9uZW50IHx8IE5vZGVDb21wb25lbnQ7XG4gICAgICAgIHByb3BzLnByb3BzID0gT2JqZWN0LmFzc2lnbih7fSwgbmdDb21wb25lbnQucHJvcHMgfHwge30sIHtcbiAgICAgICAgICAgIG5vZGUsXG4gICAgICAgICAgICBlZGl0b3IsXG4gICAgICAgICAgICBiaW5kQ29udHJvbCxcbiAgICAgICAgICAgIGJpbmRTb2NrZXRcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZWwuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgfSk7XG5cbiAgICBlZGl0b3Iub24oJ3JlbmRlcmNvbnRyb2wnLCAoeyBlbCwgY29udHJvbCB9KSA9PiB7XG4gICAgICAgIGNvbnN0IG5nQ29udHJvbCA9IGNvbnRyb2wgYXMgdW5rbm93biBhcyBBbmd1bGFyQ29udHJvbDtcblxuICAgICAgICBpZiAobmdDb250cm9sLnJlbmRlciAmJiBuZ0NvbnRyb2wucmVuZGVyICE9PSAnYW5ndWxhcicpIHJldHVybjtcblxuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncmV0ZS1lbGVtZW50Jyk7XG4gICAgICAgIGNvbnN0IHByb3BzOiBFbGVtZW50UHJvcHMgPSBlbGVtZW50IGFzIGFueTtcblxuICAgICAgICBwcm9wcy5jb21wb25lbnQgPSBuZ0NvbnRyb2wuY29tcG9uZW50O1xuICAgICAgICBwcm9wcy5wcm9wcyA9IG5nQ29udHJvbC5wcm9wcztcblxuICAgICAgICBlbC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICB9KTtcbiAgICBlZGl0b3Iub24oWydjb25uZWN0aW9uY3JlYXRlZCcsICdjb25uZWN0aW9ucmVtb3ZlZCddLCBjb25uZWN0aW9uID0+IHtcbiAgICAgICAgY29ubmVjdGlvbi5vdXRwdXQubm9kZS51cGRhdGUoKTtcbiAgICAgICAgY29ubmVjdGlvbi5pbnB1dC5ub2RlLnVwZGF0ZSgpO1xuICAgIH0pO1xuICAgIGVkaXRvci5vbignbm9kZXNlbGVjdGVkJywgKCkgPT4ge1xuICAgICAgICBlZGl0b3Iubm9kZXMuZm9yRWFjaChuID0+IG4udXBkYXRlKCkpO1xuICAgIH0pO1xufVxuXG5leHBvcnQgY29uc3QgQW5ndWxhclJlbmRlclBsdWdpbiA9IHtcbiAgICBuYW1lOiAnYW5ndWxhci1yZW5kZXInLFxuICAgIGluc3RhbGxcbn07XG5leHBvcnQgeyBSZXRlTW9kdWxlIH0gZnJvbSAnLi9tb2R1bGUnO1xuZXhwb3J0ICogZnJvbSAnLi90eXBlcyc7XG5leHBvcnQgeyBOb2RlU2VydmljZSB9IGZyb20gJy4vbm9kZS5zZXJ2aWNlJztcbmV4cG9ydCB7IE5vZGVDb21wb25lbnQgfSBmcm9tICcuL25vZGUvbm9kZS5jb21wb25lbnQnO1xuZXhwb3J0IHsgU29ja2V0Q29tcG9uZW50IH0gZnJvbSAnLi9zb2NrZXQvc29ja2V0LmNvbXBvbmVudCc7XG5leHBvcnQgeyBLZWJhYlBpcGUgfSBmcm9tICcuL2tlYmFiLnBpcGUnO1xuZXhwb3J0IHsgQ29udHJvbERpcmVjdGl2ZSB9IGZyb20gJy4vY29udHJvbC5kaXJlY3RpdmUnO1xuZXhwb3J0IHsgU29ja2V0RGlyZWN0aXZlIH0gZnJvbSAnLi9zb2NrZXQuZGlyZWN0aXZlJztcbmV4cG9ydCB7IEN1c3RvbUNvbXBvbmVudCB9IGZyb20gJy4vY3VzdG9tLmNvbXBvbmVudCc7XG4iXX0=