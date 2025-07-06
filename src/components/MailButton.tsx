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
        }

        a span {
          display: block;
          margin-left: 0.3em;
          transition: all 0.3s ease-in-out;
        }

        a svg {
          display: block;
          transform-origin: center center;
          transition: transform 0.3s ease-in-out;
        }

        a:hover .svg-wrapper {
          animation: fly-1 0.6s ease-in-out infinite alternate;
        }

        a:hover svg {
          transform: translateX(1.2em) rotate(45deg) scale(1.1);
        }

        a:hover span {
          transform: translateX(5em);
        }

        a:active {
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
        <div className="svg-wrapper-1">
          <div className="svg-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6875" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail-icon lucide-mail"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>
          </div>
        </div>
        <span>Send an Email</span>
      </a>
    </>
  );
};

export default MailButton;
