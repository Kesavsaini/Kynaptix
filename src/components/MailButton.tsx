import React from 'react';

const MailButton = () => {
  return (
    <>
      <style>{`
        .mailbutton {
          font-family: inherit;
          font-size: 20px;
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #000000 100%);
          color: white;
          padding: 0.7em 1em;
          padding-left: 0.9em;
          display: flex;
          align-items: center;
          border: none;
          border-radius: 16px;
          overflow: hidden;
          transition: all 0.2s;
          cursor: pointer;
          text-decoration: none;
        }

        .mailbutton-span {
          display: block;
          margin-left: 0.3em;
          transition: all 0.3s ease-in-out;
        }

        .mailbutton-svg {
          display: block;
          transform-origin: center center;
          transition: transform 0.3s ease-in-out;
        }

        .svg-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .mailbutton:hover .svg-wrapper {
          animation: fly-1 0.6s ease-in-out infinite alternate;
        }

        .mailbutton:hover .mailbutton-svg {
          transform: translateX(1.2em) rotate(45deg) scale(1.1);
        }

        .mailbutton:hover .mailbutton-span {
          transform: translateX(5em);
        }

        .mailbutton:active {
          transform: scale(0.95);
        }

        @keyframes fly-1 {
          from {
            transform: translateY(0.1em);
          }
          to {
            transform: translateY(-0.1em);
          }
        }
      `}</style>

      <a href='mailto:kromansaini@gmail.com' className='mailbutton'>
        <div className="svg-wrapper">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
               fill="none" stroke="currentColor" strokeWidth="1.6875" strokeLinecap="round"
               strokeLinejoin="round"
               className="mailbutton-svg">
            <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/>
            <rect x="2" y="4" width="20" height="16" rx="2"/>
          </svg>
        </div>
        <span className="mailbutton-span">Send an Email</span>
      </a>
    </>
  );
};

export default MailButton;
