function Logo({ logo}) {
  return (
    <div>
      <img 
        src={logo} 
        alt="logo con una cara" 
        className="troll-face"/>
    </div>
  );
}

export default Logo;
