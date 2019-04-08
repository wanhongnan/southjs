import { Component } from "react";
import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

export type MapRouteOption = {
  path:string, 
  component?: any,
  onEnter?: (nextState:Function, replaceState:Function)=>void,
  onLeave?: (nextState:Function, replaceState:Function)=>void,
}

var _routes = new Map<string,any>();
export function RouteMap(option:MapRouteOption | string){
  return  function(target:any) {

    if(typeof(option) == "string"){
      var opt:MapRouteOption = {
        path: option as string,
        component: target
      };
      _routes.set(opt.path,opt);
    }else{
      option.component = target;
      _routes.set(option.path,option);
    }
  }
}

export function SwitchMap(){
  var routes = [];
  for(var props of _routes.values()){
      routes.push(<Route key={props.path} {...props} exact />);
  }
  return (
    <Switch>
      {routes}
    </Switch>
  );
}

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
