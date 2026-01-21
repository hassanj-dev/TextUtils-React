import React, { useState } from "react";

export default function About() {
  const [myStyle, setMyStyle] = useState({
    color: "white",
    backgroundColor: "black",
  });

  const [btnText, setBtnText] = useState("Enable Light Mode");

  const toggleStyle = () => {
    if (myStyle.color === "white") {
      
      setMyStyle({
        color: "black",
        backgroundColor: "white",
      });
      setBtnText("Enable Dark Mode");
    } else {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
      });
      setBtnText("Enable Light Mode");
    }
  };

  return (
    
    <div className="container" style={myStyle}>
      <h1 className="my-3">About Us</h1>

      <div className="accordion" id="accordionExample" style={myStyle}>
        
        {/* Accordion 1 */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
            ✔ Tools
            </button>
          </h2>

          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Our platform brings together a powerful collection of text-based tools designed to make your work easier, faster, and more efficient. Instead of jumping between multiple websites or applications, you can perform all your essential text operations from one clean, user-friendly interface. These tools are crafted to support students, professionals, developers, writers, and anyone who needs reliable text processing in their daily routine. Whether you want to transform, clean, analyze, or improve your content, our tools ensure that every action is accurate, instant, and hassle-free. With a focus on performance and simplicity, this section empowers you to handle complex text tasks with just a few clicks.
            </div>
          </div>
        </div>

        {/* Accordion 2 */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
           ✔ Utilities
            </button>
          </h2>

          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Our utilities provide a deeper level of control and flexibility for your text. These features are designed not only to enhance your writing but also to help you understand how your text behaves. Whether you are preparing content for publishing, academic submission, or communication, these utilities help you refine your text with precision. You can easily remove unwanted spaces, optimize sentence structure, adjust formatting, or measure readability. Every utility is built to deliver clear results, making your work more polished and professional. This section serves as a toolkit for improving clarity, structure, and presentation, ensuring your writing communicates the right message effectively.
            </div>
          </div>
        </div>

        {/* Accordion 3 */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
            ✔ Editor
            </button>
          </h2>

          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Our editor is a dynamic and versatile space created for anyone who works with text on a regular basis. It offers an environment where you can write freely, experiment with ideas, refine sentences, or completely transform your content. The editor integrates multiple features that support productivity, allowing you to quickly switch between editing, analyzing, and formatting modes. It is designed to handle everything from small notes to long documents with ease. Whether you are a student preparing an assignment, a developer formatting code text, or a writer polishing an article, the editor gives you full control over your content. With a smooth interface and real-time results, it becomes a reliable companion for all kinds of writing and text manipulation tasks.
            </div>
          </div>
        </div>
      </div>

      <div className="container my-3">
        <button onClick={toggleStyle} type="button" className="btn btn-primary">
          {btnText}
        </button>
      </div>
    </div>
  );
}

