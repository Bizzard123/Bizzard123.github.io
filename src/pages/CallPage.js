import React, {useState,useEffect} from 'react';

const CallPage = () => {
  const pageContainerStyle = {
    display: 'flex',
    height: '100vh'
  };

  const leftSectionStyle = {
    width: '20%',
    backgroundColor: 'black',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px'
  };

  const rightSectionStyle = {
    width: '80%',
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  const formContainerStyle = {
    width: '60%'
  };

  const styledFormStyle = {
    display: 'flex',
    flexDirection: 'column'
  };

  const styledInputStyle = {
    padding: '10px',
    margin: '10px 0',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '16px'
  };

  const styledButtonStyle = {
    padding: '10px',
    margin: '10px 0',
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    cursor: 'pointer',
    hover: {
      backgroundColor: '#0056b3'
    }
  };

  const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const form = document.getElementById("my-form");
    
        const handleSubmit = (e) => {
            e.preventDefault();
            setIsLoading(true);
            const data = new FormData(form);
            const action = e.target.action;
    
            fetch(action, {
                method: "POST",
                body: data,
            })
                .then(() => {
                    setIsLoading(false);
                    alert("Form Submitted Successfully!");
                    form.reset();
                })
                .catch((error) => {
                    setIsLoading(false);
                    alert(error);
                });
        };
    
        form.addEventListener("submit", handleSubmit);
    
        return () => {
            form.removeEventListener("submit", handleSubmit);
        };
    }, []);

  return (
    <div style={pageContainerStyle}>
      <div style={leftSectionStyle}>
        <div>
          <h2>Information</h2>
          <p>Some text goes here...</p>
        </div>
      </div>
      <div style={rightSectionStyle}>
        <div style={formContainerStyle}>
          <form style={styledFormStyle} id='my-form' action='https://script.google.com/macros/s/AKfycbx9wCgldHOYV8EGo8QD6Ka1DX_R70xupfyAqlk_sknGRp43P4Gy16nIKaWrlBRQGPiHsg/exec'>
            <input name='Name' style={styledInputStyle} type="text" placeholder="Your Name" />
            <input name='Email' style={styledInputStyle} type="email" placeholder="Your Email" />
            <input name='Subject' style={styledInputStyle} type="text" placeholder="Subject" />
            <input name='Message' style={styledInputStyle} type="textarea" placeholder="Message" />
            <button style={styledButtonStyle} type="submit">{isLoading ? "Please Wait..." : "Send"}</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CallPage;
