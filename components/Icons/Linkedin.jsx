function Linkedin({ className }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      viewBox='0 0 72 72'
    >
      <rect width='50' height='50' x='11' y='11' fill='#61b2e4' rx='3' />
      <path fill='#fff' d='M20 30h6v21h-6z' />
      <circle cx='23' cy='22' r='3.5' fill='#fff' />
      <path
        fill='#fff'
        d='M42.5 35c-2.2 0-4 1.2-4 4.5V51h-6V30h6v2.2a8 8 0 0 1 6-2.7c4.4 0 8 3.3 8 9V51h-6V39.5c0-3.3-1.8-4.5-4-4.5'
      />
      <g fill='none' stroke='#000' strokeWidth='2'>
        <rect
          width='50'
          height='50'
          x='11'
          y='11'
          strokeMiterlimit='10'
          rx='3'
        />
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M20 30h6v21h-6z'
        />
        <circle
          cx='23'
          cy='22'
          r='3.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M42.5 35c-2.2 0-4 1.2-4 4.5V51h-6V30h6v2.2h0a8 8 0 0 1 6-2.7c4.4 0 8 3.3 8 9V51h-6V39.5c0-3.3-1.8-4.5-4-4.5'
        />
      </g>
    </svg>
  );
}

export default Linkedin;
