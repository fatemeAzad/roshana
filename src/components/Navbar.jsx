import { Link, NavLink } from "react-router-dom";
import { CURRENTLINE } from "./../helpers/colors";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm ">
      <div className="container" style={{ marginRight: "80px" }}>
        <div className="row w-100">
          <div className="col">
            <div className="navbar-brand " style={{ color: CURRENTLINE }}>
              <div style={{ display: "flex" }}>
                <div style={{ display: "flex" }}>
                  <NavLink
                    to={"/register"}
                    style={{
                      margin: "3px",
                      marginLeft: "25px",
                      width: "120px",
                      height: "48px",
                      borderRadius: "0.375rem",
                      lineHeight: "48px",
                      alignItems: "center",
                      justifyContent: "center",
                      display: "flex",
                      fontSize: "20px",
                    }}
                    className="btn btn-manage "
                  >
                    ثبت نام
                  </NavLink>
                  <NavLink
                    to={"/login"}
                    className="btn btn-manage"
                    style={{
                      margin: "3px",
                      marginLeft: "25px",
                      width: "120px",
                      height: "48px",
                      borderRadius: "0.375rem",
                      lineHeight: "48px",
                      alignItems: "center",
                      justifyContent: "center",
                      display: "flex",
                      fontSize: "20px",
                    }}
                  >
                    ورود
                  </NavLink>
                </div>
                <nav>
                  <ul className="nav-item " style={{ display: "flex" }}>
                    <li style={{ margin: "10px", color: "antiquewhite" }}>
                      <div className="btn-group">
                        <a type="button">صفحات</a>
                        <a
                          type="button"
                          className=" dropdown-toggle dropdown-toggle-split"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <span className="visually-hidden">
                            Toggle Dropdown
                          </span>
                        </a>
                        <ul className="dropdown-menu">
                          <Link to="/resume" style={{ textDecoration: "none" }}>
                            <li>
                              <a className="dropdown-item ">
                                رزومه <i className="fa fa-vcard-o"></i>
                              </a>
                            </li>
                          </Link>
                          <li>
                            <a className="dropdown-item" href="#">
                              مدارک <i className="fa fa-folder-open"></i>
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              پروژه‌ها <i className="fa fa-tasks"></i>
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              آزمون‌ها<i className="fa fa-pencil-square-o"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <Link to="/teachers" style={{ textDecoration: "none" }}>
                      <li style={{ margin: "10px", color: "antiquewhite" }}>
                        {" "}
                        اساتید
                      </li>
                    </Link>
                    <Link to="/mentors" style={{ textDecoration: "none" }}>
                      {" "}
                      <li style={{ margin: "10px", color: "antiquewhite" }}>
                        <a>منتورها</a>
                      </li>
                    </Link>
                    <Link to="/teachers" style={{ textDecoration: "none" }}>
                      {" "}
                      <li style={{ margin: "10px", color: "antiquewhite" }}>
                        <a>مسیرها</a>
                      </li>
                    </Link>
                    <Link to="/teachers" style={{ textDecoration: "none" }}>
                      {" "}
                      <li style={{ margin: "10px", color: "antiquewhite" }}>
                        <a>کارگاه‌ها</a>
                      </li>
                    </Link>
                    <Link to="/teachers" style={{ textDecoration: "none" }}>
                      {" "}
                      <li style={{ margin: "10px", color: "antiquewhite" }}>
                        <a>صنعت</a>
                      </li>
                    </Link>
                    <Link to="/about" style={{ textDecoration: "none" }}>
                      {" "}
                      <li style={{ margin: "10px", color: "antiquewhite" }}>
                        <a>درباره ما</a>
                      </li>
                    </Link>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <div className="col"></div>
        </div>
        <Link to="/" style={{ textDecoration: "none" }}>
          <div style={{ display: "flex" }}>
            <p className="mx-3 logo roshana">روشنا</p>
            <i className="fa fa-users logo" />
          </div>
        </Link>
      </div>
    </nav>
  );
};


