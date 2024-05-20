import { FormEvent, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const [email, setEmail] = useState<string>('');
  const [subject, setSubject] = useState<string>('')
  const [message, setMessage] = useState<string>('');

  const handleSendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const options = {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          subject,
          message
        }),
      };
      const fetchResponse = await fetch("/api/v1/sendEmail", options);
      console.log(fetchResponse)
    } catch (e) {
      console.log(e)
    }

  }

  return (

      <div  className="form-div">

      <form onSubmit={handleSendEmail}>
        <div>
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
        </div>
        <div>
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
        </div>
        <div>

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
        </div>
        <div>
            <input type="submit"
              value="Submit"
          />         
        </div>
          </form>
        </div>
  )
}

export default App
