const BoxColor = ({ color, isActive, text }) => {
  return (
    <>
        <div
      className={`box ${isActive ? color : ''}`}
      style={{
        backgroundColor: isActive ? color : 'transparent',
        border: `2px solid ${color}`,
      }}
    >
      <p style={{ color: isActive ? '#000' : color }}>
        {isActive ? `Yes, I'm ${color} color` : `I'm not a ${color} color`}
      </p>
    </div>
    </>
  );
};

export default BoxColor;