import "./navbar.scss";
export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">GPP</div>
      <div className="icons">
        <div className="icon">
          <img src="img/search.svg" alt="" />
        </div>
        <div className="icon">
          <img src="img/app.svg" alt="" />
        </div>
        <div className="icon">
          <div className="notfications">
            <img src="img/notifications.svg" alt="" />
            <span>1</span>
          </div>
        </div>
        <div className="user">
          <img
            src="https://th.bing.com/th/id/R.b37449e1b72e11ff5dd8107308207fd3?rik=vb9G3NWALO1Hdw&pid=ImgRaw&r=0"
            alt=""
          />
          <span>Username</span>
        </div>
        <div className="icon">
          <img src="img/settings.svg" alt="" />
        </div>
      </div>
    </div>
  );
};
