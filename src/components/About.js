import React, { useState } from 'react';

export default function About() {
  const [myStyle, setMyStyle] = useState({
    color: 'black',
    backgroundColor: 'white',
  });

  const [btnText, setBtnText] = useState('Enable Dark Mode');

  const toggleStyle = () => {
    if (myStyle.color === 'black') {
      setMyStyle({
        color: 'white',
        backgroundColor: '#333',
        border: '1px solid #555',
      });
      setBtnText('Enable Light Mode');
    } else {
      setMyStyle({
        color: 'black',
        backgroundColor: 'white',
        border: '1px solid #ddd',
      });
      setBtnText('Enable Dark Mode');
    }
  };

  return (
    <div className="container p-4" style={myStyle}>
      <h2 className="mb-4 text-center" style={{ fontWeight: '600' }}>
        About Us
      </h2>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item" style={{ borderRadius: '5px', marginBottom: '1em', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
          <h2 className="accordion-header">
            <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Accordion Item #1
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              <strong>This is the first item's accordion body.</strong> You can modify any of this with custom CSS or override the default styles. This accordion component is flexible and can hold any HTML elements.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={{ borderRadius: '5px', marginBottom: '1em', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Accordion Item #2
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              <strong>This is the second item's accordion body.</strong> Modify any of this text with custom content, or use the default styles provided.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={{ borderRadius: '5px', marginBottom: '1em', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Accordion Item #3
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              <strong>This is the third item's accordion body.</strong> This accordion component is easy to use and can be customized to fit your needs.
            </div>
          </div>
        </div>
      </div>
      <div className="container text-center my-4">
        <button onClick={toggleStyle} type="button" className="btn btn-primary px-4 py-2" style={{ borderRadius: '5px' }}>
          {btnText}
        </button>
      </div>
    </div>
  );
}
