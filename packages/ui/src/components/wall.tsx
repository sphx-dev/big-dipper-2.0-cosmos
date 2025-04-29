import { useState } from 'react';

const WALL_KEY = 'sphx2025';

export const Wall = () => {
  const [input, setInput] = useState('');
  const code = window.localStorage.getItem(WALL_KEY);

  if (code === 'sphx2025') {
    return null;
  }

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#00000080',
        backdropFilter: 'blur(10px)',
        zIndex: 9999,
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
        }}
      >
        <h2
          style={{
            color: 'white',
            fontSize: '22px',
            padding: '20px',
          }}
        >
          Please enter code:
        </h2>
        <input
          type="text"
          placeholder="Enter code"
          style={{
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            marginBottom: '10px',
          }}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              window.localStorage.setItem(WALL_KEY, input);
              window.location.reload();
            }
          }}
        />
        <button
          style={{
            padding: '10px 20px',
            borderRadius: '5px',
            backgroundColor: 'rgb(31, 171, 173)',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
          }}
          onClick={() => {
            // Handle the button click
            console.log('Button clicked');
            window.localStorage.setItem(WALL_KEY, input);
            window.location.reload();
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};
