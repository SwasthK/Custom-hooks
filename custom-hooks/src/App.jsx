// // import { useEffect, useState } from "react";
// // import reactLogo from "./assets/react.svg";
// // import viteLogo from "/vite.svg";
// // import "./App.css";
// // import React from "react";

import { useEffect, useState } from "react";

// // function App() {
// //   const [render, setrender] = useState(false)
// //   useEffect(() => {
// //     setInterval(() => {
// //       setrender((p) => !p);
// //     }, 1000);
// //   },);

// //   return (
// //     <>
// //       {render ? <MyComponent /> : null}
// //     </>
// //   );
// // }

// // class MyComponent extends React.Component {
// //   componentDidMount() {
// //     // Perform setup or data fetching here
// //     console.log("comp mount");
// //   }

// //   componentWillUnmount() {
// //     // Clean up (e.g., remove event listeners or cancel subscriptions)
// //     console.log("comp unmount");
// //   }

// //   render() {
// //     // Render UI
// //     return <div>hi</div>;
// //   }
// // }

// // // class MyComponent extends React.Component {
// // //   constructor(props) {
// // //     super(props);
// // //     this.state = { count: 0 };
// // //   }

// // //   incrementCount = () => {
// // //     this.setState({ count: this.state.count + 1 });
// // //   }

// // //   render() {
// // //     return (
// // //       <div>
// // //         <p>{this.state.count}</p>
// // //         <button onClick={this.incrementCount}>Increment</button>
// // //       </div>
// // //     );
// // //   }
// // // }

// // // function Compo() {
// // //   const [count, setCount] = useState(0);

// // //   function inc() {
// // //     setCount(count + 1);
// // //   }

// // //   return (
// // //     <div>
// // //       <p>{count}</p>
// // //       <button onClick={inc}>increment</button>
// // //     </div>
// // //   );
// // // }

// // export default App;

// import { useEffect, useState } from "react";
// import axios from "axios";

// function useTodos(n) {
//   const [todos, setTodos] = useState([]);
//   const [load, setload] = useState(true);

//   useEffect(() => {
//     setInterval(() => {
//       const value = axios
//         .get("https://sum-server.100xdevs.com/todos")
//         .then((res) => {
//           setTodos(res.data.todos);
//           setload(false);
//         });
//     }, n * 1000);

//     axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
//       setTodos(res.data.todos);
//       setload(false);
//     });

//     return () => {
//       clearInterval(value);
//     };
//   }, [n]);

//   return { todos, load };
// }

// function App() {
//   const { todos, load } = useTodos(5);

//   if (load) {
//     return <div>Loading .....</div>;
//   }
//   return (
//     <>
//       {todos.map((todo) => (
//         <Track todo={todo} />
//       ))}
//     </>
//   );
// }

// function Track({ todo }) {
//   return (
//     <div>
//       {todo.title}
//       <br />
//       {todo.description}
//     </div>
//   );
// }

// export default App;

let val = 0;

function useIsDebounce(val, t) {
  const [debounce, isdebounce] = useState(val);
  useEffect(() => {
    var stop = setTimeout(() => {
      isdebounce(val);
    }, t);

    return () => clearInterval(stop);
  }, [val]);

  return { debounce };
}

function App() {
  const [input, setinput] = useState("");

  console.log(input);

  const { debounce } = useIsDebounce(input, 500);

  // useEffect(()=>{
  // fetch request !
  // },[debounce])

  return (
    <>
      <input type="text" onChange={(e) => setinput(e.target.value)} />
      <Track debounce={debounce}></Track>
    </>
  );
}

function Track({ debounce }) {
  return (
    <div>
      The value is {debounce}
      <br />
    </div>
  );
}

export default App;

// function useIsCount(fn, t) {
//   useEffect(() => {
//     const val = setInterval(() => {
//       fn();
//     }, t);
//     return () => clearInterval(val);
//   }, [fn, t]);
// }

// function App() {
//   const [count, setCount] = useState(0);
//   useIsCount(() => {
//     setCount((count) => count + 1);
//   }, 2000);

//   return (
//     <>
//       <Track count={count}></Track>
//     </>
//   );
// }

// function Track({ count }) {
//   return (
//     <div>
//       The value is {count}
//       <br />
//     </div>
//   );
// }

// export default App;

// function useIspointer() {
//   const [pointer, setpointer] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     window.addEventListener("mousemove", (e) =>
//       setpointer({ x: e.clientX, y: e.clientY })
//     );
//     return window.removeEventListener("mousemove",(e)=>{});
//   }, []);
//   return { pointer };
// }

// function App() {
//   const { pointer } = useIspointer();
//   return (
//     <>
//       <Track props={pointer}></Track>
//     </>
//   );
// }

// function Track({props}) {
//   console.log(props);

//   return (
//     <div>
//       {props.x}
//       <br />
//       {props.y}
//     </div>
//   );
// }

// export default App;

// function useIsOnline() {
//   const [online, setonline] = useState(window.navigator.onLine);

//   useEffect(() => {
//     window.addEventListener("online", () => setonline(true));
//     window.addEventListener("offline", () => setonline(false));
//   }, []);
//   return { online };
// }

// function App() {
//   const { online } = useIsOnline();
//   if (online) {
//     console.log("ONLINE");
//   } else {
//     console.log("OFFLINE");
//   }
//   return (
//     <>
//       <Track></Track>
//     </>
//   );
// }

// function Track() {
//   return (
//     <div>
//       hi
//       <br />
//       hwllo
//     </div>
//   );
// }

// export default App;
