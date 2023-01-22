import React from 'react';
import { useNavigate } from 'react-router-dom';

function Button({ name, path }) {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(path)}
      type="button"
      className="px-10 py-2.5 bg-cyan-600 text-white font-medium text-l leading-tight
             rounded-full shadow-md
             ease-in duration-300 hover:bg-purple-700 hover:shadow-lg hover:scale-110"
    >
      {name}
    </button>
  );
}

export default Button;
