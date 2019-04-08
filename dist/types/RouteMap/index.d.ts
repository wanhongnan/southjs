/// <reference types="react" />
export declare type MapRouteOption = {
    path: string;
    component?: any;
    onEnter?: (nextState: Function, replaceState: Function) => void;
    onLeave?: (nextState: Function, replaceState: Function) => void;
};
export declare function RouteMap(option: MapRouteOption | string): (target: any) => void;
declare const SwitchMap: () => JSX.Element;
export { SwitchMap };
/**
@RouteMap({path:"/index/abc"})
export class Test extends VComponent<any,StateLoading>{
  render(){
    return (
      <div>Test</div>
    );
  }
}

使用:
<HashRouter>
  <SwitchMap></SwitchMap>
  <Link to="/index/abc">A1</Link>
  <Link to="/index/abc2">A2</Link>
  <Link to="/index/abc3">A3</Link>
  <Link to="/index/abc4">A4</Link>
</HashRouter>
 */
//# sourceMappingURL=index.d.ts.map