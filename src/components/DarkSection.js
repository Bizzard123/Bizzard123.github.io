import React from 'react';
import { useEffect, useState } from "react";
    

const DarkSection = () => {
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
    <div className="DarkSection wow fadeInUp">
      <div className="left-content">
        <h2>Crafting Digital Success with Codify</h2>
        <p>Discover the innovative marketing strategies that set Codify apart, driving success in the digital landscape.</p>
        <button>Schedule a Call</button>
      </div>

      <div className="right-content">
        <h3>Get in Touch!</h3>
        <form id='my-form' action='https://script.google.com/macros/s/AKfycbwj9YOQvBtbK-H_X6G1qVgWH-_ewnJxILKbflqzoDwEcQwHGVGAzj7_NnhPTO31xv3e/exec'>
          <div>
            <input name='Name' required="required" type="text" placeholder="Name" />
          </div>
          <div>
            <input type="email" name="Email" required="required" placeholder="Email" />
          </div>
          <div>
            <input type="tel" placeholder="Number" name="Number" required="required" />
          </div>
          <button className='centered-button-inverted' type="submit">
          {isLoading ? "Please Wait..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default DarkSection;
