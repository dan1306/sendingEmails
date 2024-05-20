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
          <div style={{
            // display: 'inline-block',
            // width: '100vw'
          }}>Email Address: </div>
          <div style={{
            height: "3vh",
            margin: "5px 0"
          }}>
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
              style={{
                width: "100%",
                height: "90%",
                border: "2px solid #d8dadc" /* border width, border style, border color */
              }}
              />
            </div>
        </div>
        <div>
          <div>Subject:
          </div>   
          <div style={{
            height: "3vh",
            margin: "5px 0"
          }}>
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
                style={{
                  width: "100%",
                  height: "90%",
                  border: "2px solid #d8dadc" /* border width, border style, border color */

                }}
              />
             </div>
        </div>
        <div>

            <div > Message: </div>
          <div style={{
            height: "25vh",
            // maxHeight: "45vh",
            margin: "5px 0"
          }} >
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
                style={{
                  width: "100%",
                  maxWidth: "100%",
                  height: "100%",
                  maxHeight: "100%",
                  border: "2px solid #d8dadc" /* border width, border style, border color */
                }}
              >
                Enter text here...
              </textarea> 
          </div>      
        </div>
        <div
          style={{
            height: "4vh",
            // maxHeight: "45vh",
            margin: "5px 0"
          }}>
            <input type="submit"
            value="Submit"
            className="submit-button" 
            // style={{
             
            // }}
          />         
        </div>
          </form>
        </div>
  )
}

export default App
