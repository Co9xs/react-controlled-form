import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ControlledInput } from './components/ControlledInput'
import { UncontrolledInput } from './components/UncontrolledInput';
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
            <h2 style={{margin: "0"}}>Uncontrolled</h2>
            <p style={{margin: "0"}}>状態をDOMに持たせたまま、任意のタイミングでrefから値を取り出す（今回はonBlurでconsoleに表示している）</p>
            <p style={{margin: "0"}}>DOMに値を保存しているので、React以外のJSコードからでも参照しやすい</p>
            <UncontrolledInput/>
          </div>

          <div style={{background: '#EFEFEF', marginBottom: '30px', padding: '10px'}}>
            <h2 style={{margin: "0"}}>Mixed</h2>
            <p style={{margin: "0"}}>状態はDOMに持たせつつ、onBlurでstateに同期</p>
            <p style={{margin: "0"}}>再レンダリングが走る回数が少ない分パフォーマンス◯</p>
            <MixedInput/>
          </div>

          <div style={{background: '#EFEFEF', marginBottom: '30px', padding: '10px'}}>
            <p style={{margin: "0"}}>参考</p>
            <ul>
              <li>
                <a href="https://goshakkk.name/controlled-vs-uncontrolled-inputs-react/">https://goshakkk.name/controlled-vs-uncontrolled-inputs-react/</a>
              </li>
              <li>
                <a href="https://ja.reactjs.org/docs/uncontrolled-components.html">https://ja.reactjs.org/docs/uncontrolled-components.html</a>
              </li>
              <li>
                <a href="https://zenn.dev/nekoniki/articles/6102d68097e59a">https://zenn.dev/nekoniki/articles/6102d68097e59a</a>
              </li>
              <li>
                <a href="https://blog.ojisan.io/react-form-control">https://blog.ojisan.io/react-form-control</a>
              </li>
            </ul>
          </div>
        </div>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('#app'));