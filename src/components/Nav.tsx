function Nav() {
  const navElements = ["Portfolio", "CV", "About", "Contact"];

  return (
    <div className="wrapper">
      <div className="glitch-wrapper">
        <div className="glitch nav-item" data-glitch="@vanxavier">
          van_xavier
        </div>
      </div>
      <div className="nav-right">
        <ul className="nav-list">
          {navElements.map((item, index) => (
            <li className="nav-item" key={index}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Nav;
