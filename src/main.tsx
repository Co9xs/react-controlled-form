import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ControlledInput } from './components/ControlledInput'
import { MixedInput } from './components/MixedInput';

class App extends React.Component {
  render() {
    return (
        <div>
          <div style={{background: '#EFEFEF', marginBottom: '30px', padding: '10px'}}>
            <h2 style={{margin: "0"}}>Controlled</h2>
            <p style={{margin: "0"}}>状態をReactで完全に制御してonChangeでstateを更新してvalueに反映</p>
            <p style={{margin: "0"}}>入力中のinputの状態に応じて他の部分をインタラクティブに変更したい時に便利（リアルタイムなバリデーション, etc）</p>
            <ControlledInput/>
          </div>

          <div style={{background: '#EFEFEF', marginBottom: '30px', padding: '10px'}}>
            <h2 style={{margin: "0"}}>Mixed</h2>
            <p style={{margin: "0"}}>状態はDOMに持たせつつ、onBlurでstateに同期</p>
            <p style={{margin: "0"}}>再レンダリングが走る回数が少ない分パフォーマンス◯</p>
            <MixedInput/>
          </div>
        </div>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('#app'));