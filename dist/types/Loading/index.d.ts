import './style.less';
/**
 * 注意： 添加 onLoadingError(err:any){} 函数可以处理Loading的错误及异常结果
 * 例：
 *  onLoadingError(err:any){
 *    console.log(err);
 *    alert(err);
 *  }
 *  @Loading()
 *  async onDateChange(){
 *      var ret = await fetch("http://34.92.124.146:5000/provider/all");
 *      var text = await ret.json();
 *      console.log(text);
 *  }
 */
export declare function Loading(): (target: any, name: any, descriptor: any) => any;
/**
 * 使用在render()函数上
 */
export declare function RenderLoading(): (target: any, name: any, descriptor: any) => any;
/**
 * 例程：
import React,{ Component } from "react";
import ReactDOM  from "react-dom";
import { DatePicker, Button } from 'antd';
import { Loading, RenderLoading } from "utils/Loading";

class Panel extends Component<{},{loading:boolean}>{
  onLoadingError(err:any){
    console.log(err);
    //alert(err);
  }

  @Loading()
  async onDateChange(){
      var ret = await fetch("http://www.baidu.com/");
      var text = await ret.json();
      console.log(text);
  }

  @RenderLoading()
  render(){
    return (
      <div>
        <Button loading={this.state.loading}>ABC</Button>
        <DatePicker onChange={this.onDateChange.bind(this)}/>
      </div>
    );
  }
}

ReactDOM.render(<Panel />, document.getElementById("app"))
 */
//# sourceMappingURL=index.d.ts.map