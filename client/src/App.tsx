import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const [email, setEmail] = useState<string>('');
  const [subject, setSubject] = useState<string>('')
  const [message, setMessage] = useState<string>('');



  return (

    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <div>
        <div>
          <form>
          <label>Email:
              <input
                placeholder="Enter Recipient Email"
                type="email"
                value={email}
                onChange={(e) => {
                  const { value } = e.target;
                  console.log(value)
                  setEmail(value)
                  console.log("email: ", email )
                }}
              />
            </label>
            <label>Subject:
              <input
                placeholder="Enter the subject"
                type="text"
                value={subject}
                onChange={(e) => {
                  const { value } = e.target;
                  console.log(value)
                  setSubject(value)
                  console.log("subject: ", subject )
                }}
              />
            </label>
            <label >Message:
              <textarea
                placeholder="Your message goes here"
                name="message"
                form="usrform"
                value={message}
                onChange={(e) => {
                  const { value } = e.target;
                  console.log(value)
                  setMessage(value)
                  console.log("message: ", message )
                }}
              >
                Enter text here...
              </textarea> 
            </label>
            <input type="submit"
              value="Submit"
              onClick={() => {
                console.log("email: ", email )
                console.log("subject: ", subject )
                console.log("message: ", message )
              }}
            />
          </form>
        </div>
      </div>
      
    </>
  )
}

export default App
