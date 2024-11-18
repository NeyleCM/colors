const BoxColor = ({ color, isActive, text }) => {
  return (
    <>
      <div
      className={`box`}
      style={{
        backgroundColor: isActive ? color : 'transparent', 
        borderColor: color, 
        color: isActive ? '#000' : color, 
      }}
      >
      <p>
        {isActive
          ? `Yes, I'm ${color} color` 
          : `I'm not a ${color} color`}
      </p>
      </div>
    </>
  );
};

export default BoxColor;