import React from 'react'

const Xlink = () => {
  return (
    <ul className="mb-4 mt-4 list-none space-x-1">
  <li className="inline-block text-left">
    <a
      className="relative mb-1 inline-block cursor-pointer select-none overflow-hidden whitespace-nowrap rounded p-2 text-center align-middle text-xs font-medium leading-5 tracking-wide text-white transition duration-300 ease-linear hover:text-blue-400 hover:shadow-2xl hover:shadow-blue-600"
      href="https://x.com/KeshavXDev"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="sr-only hidden">X</span>
      <svg
        stroke="currentColor"
        fill="currentColor"
        aria-label="Twitter"
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-8 w-8 fill-current"
      >
        <g>
          <path
            d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
          ></path>
        </g>
      </svg>
    </a>
  </li>
</ul>
  )
}

export default Xlink