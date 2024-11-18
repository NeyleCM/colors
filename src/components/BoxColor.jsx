const BoxColor = ({ color, isActive, text }) => {
  return (
    <>
      <div
        className='box'
        style={{ backgroundColor: isActive ? color : 'transparent' }}>
        {isActive ? `¡Soy el color ${color}!` : `No soy el color ${color}`}
        <br />
        <span>{text}</span>
      </div>
    </>
  );
};

export default BoxColor;