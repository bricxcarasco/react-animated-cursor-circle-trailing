import React from 'react';
import './App.css';
import Cursor from './Cursor';

function App() {
  return (
    <div className="App">
      <Cursor />
      <h1>Hello Bricx!</h1>
      <section>
        <h1>Animated Cursor <br/>React Component</h1>
        <hr/>
        <p>An animated cursor component made as a <a>Functional Component</a>, using <a>React hooks</a> like <a>useEffect</a> to handle event listeners, local state, an  <a>RequestAnimationFrame</a> management.</p>
        <p>Hover over these <a>links</a> and see how that animated cursor does it's thing. Kinda nifty, right? Not right for most things, but a nice move for more interactive-type projects. Here's another <a href="">link to nowhere.</a></p>
        <p>Play with the <a>css variables</a> to influence the cursor, cursor outline size, and amount of scale on target hover. I suppose those could all be <a>props</a> with some. Click in the margin to check click animation.</p>
      <p>There's probably a better way to manage these kind of events, but this was the best I could come up with. Recently started mucking more with React cause I'm down with the simplicity of Functional Components and Hooks. And if you read the docs, the future ain't class components. So, best get on them functions.</p>
      </section>
    </div>
  );
}

export default App;
