import React from 'react'

function Button({name}) {
  return (
    <button
            
            type="button"
            className="inline-block px-10 py-2.5 bg-cyan-600 text-white font-medium text-l leading-tight
             rounded-full shadow-md
             ease-in duration-300 hover:bg-purple-700 hover:shadow-lg my-9 hover:scale-110"
          >
            {name}
          </button>
  )
}

export default Button