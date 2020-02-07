import React, { useState, Component } from 'react'
import { Button, Text } from "@blueprintjs/core";

const Counter = () => {
    const [state, setState] = useState(0);
    return (
        <div>
            <Button className="bp3-intent-success" onClick={()=>setState(state+1)}> Add point </Button>
            <Text className="baba">{state}</Text>
            <Button className="bp3-intent-danger" onClick={()=>setState(state-1)}> remove point </Button>
        </div>
    )
}

export default Counter;
// export default class index extends Component {

//     state={value:0}

//     render() {
//         return (
//             <div>
//                 <div>
//                     <Button className="bp3-intent-success" onClick={() => this.setState({value:this.state.value + 1})}> Add point </Button>
//                     <Text>{this.state.value}</Text>
//                     <Button className="bp3-intent-danger" onClick={() => this.setState({value:this.state.value - 1})}> remove point </Button>
//                 </div>
//             </div>
//         )
//     }
// }
