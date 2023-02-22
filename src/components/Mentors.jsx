import {Navbar} from "./Navbar";

export const Mentors = () => {
  const teachersx = [
    {
      fullname: "سپیده اردوخانی",
      age: "27",
      photo:
        "https://toplearn.com/img/user/teachers/32650_e1993968-3b1f-8383-3bf0-39f1d273198b_%DB%8C%D8%A7%D8%B3%D9%85%DB%8C%D9%86_%D8%B4%D8%A7%D9%87%D9%82%D9%84%DB%8C%20%DA%AF%D8%B4%D8%AA%DB%8C.jpg",

      email: "hr@gmail.com",
      job: "استاد دانشگاه ",
      tahsilat: " دکتری مهندسی صنایع",
      group: "2",
      id: 4,
    },
    {
      fullname: "حسن خسروجردی",
      age: "39",
      photo:
        "https://toplearn.com/img/user/teachers/user-profile-%D8%B4%D9%86%D8%A8%D9%87-%DB%B2%DB%B4-%D8%A7%D8%B3%D9%81%D9%86%D8%AF-%DB%B1%DB%B3%DB%B9%DB%B8-33516018-653.jpg",

      email: "hasan@madaeny.com",
      job: "استاد دانشگاه ",
      tahsilat: " دکتری مهندسی صنایع",
      group: "1",
      id: 5,
    },
    {
      fullname: "ایمان مدائنی",
      age: "45",
      photo:
        "https://toplearn.com/img/user/teachers/4144_7ae53f99-8262-e231-53e2-39f45952c3d1_%D8%B3%DB%8C%D8%AF%D8%AD%D8%B3%DB%8C%D9%86_%D9%85%D9%88%D8%B3%D9%88%DB%8C.jpg",

      email: "iman@madaeny.com",
      job: "استاد دانشگاه ",
      tahsilat: " دکتری مهندسی صنایع",
      group: "1",
      id: 6,
    },
    {
      fullname: "یونس قربانی",
      age: "35",
      photo:
        "https://toplearn.com/img/user/teachers/117_246c5266-995c-4ced-ad8f-0ae49c568901_%D8%B9%D9%84%DB%8C_%D9%BE%D9%88%D8%B1%D8%A7%D8%AD%D9%85%D8%AF%DB%8C.jpg",

      email: "younes.gh@chmail.ir",
      job: "استاد دانشگاه ",
      tahsilat: " دکتری مهندسی صنایع",
      group: "1",
      id: 7,
    },
    {
      fullname: "محمد اردوخانی",
      age: "27",
      photo:
        "https://toplearn.com/img/user/teachers/36314_b9b9ccbb-33e5-faae-0091-39e3d9e795cb_%D9%81%D8%B1%D8%B2%D8%A7%D9%85_%DB%8C%D9%85%DB%8C%D9%86%DB%8C.jpg",

      email: "hr@gmail.com",
      job: "استاد دانشگاه ",
      tahsilat: " دکتری مهندسی صنایع",
      group: "2",
      id: 4,
    },
    {
      fullname: "حسن خسروجردی",
      age: "39",
      photo:
        "https://toplearn.com/img/user/teachers/268_2b05b90b-7a78-4e35-058f-39e6b8cf2ac1_%D8%AD%D8%B3%D9%86%20_%D8%AE%D8%B3%D8%B1%D9%88%D8%AC%D8%B1%D8%AF%DB%8C.jpeg",

      email: "hasan@madaeny.com",
      job: "استاد دانشگاه ",
      tahsilat: " دکتری مهندسی صنایع",
      group: "1",
      id: 5,
    },
    {
      fullname: "ایمان مدائنی",
      age: "45",
      photo:
        "https://toplearn.com/img/user/teachers/15633_2402cc6d-1d17-6a22-e6cc-39e3248f13a4_%D8%A7%DB%8C%D9%85%D8%A7%D9%86_%D9%85%D8%AF%D8%A7%D8%A6%D9%86%DB%8C.jpg",

      email: "iman@madaeny.com",
      job: "استاد دانشگاه ",
      tahsilat: " دکتری مهندسی صنایع",
      group: "1",
      id: 6,
    },
    {
      fullname: "یونس قربانی",
      age: "35",
      photo:
        "https://toplearn.com/img/user/teachers/25033_1593aba2-5cb5-6add-a31f-39e35253dd2a_%DB%8C%D9%88%D9%86%D8%B3_%D9%82%D8%B1%D8%A8%D8%A7%D9%86%DB%8C.jpg",

      email: "younes.gh@chmail.ir",
      job: "استاد دانشگاه ",
      tahsilat: " دکتری مهندسی صنایع",
      group: "1",
      id: 7,
    },
    {
      fullname: "محمد اردوخانی",
      age: "27",
      photo:
        "https://toplearn.com/img/user/250x259/25855_b417fa24-3fb2-4cc6-be31-c04c1926f7ff_%D8%B7%D9%87_%D8%A7%D8%AE%D9%84%D8%A7%D9%82%20%D9%BE%D8%B3%D9%86%D8%AF%DB%8C.jpg",

      email: "hr@gmail.com",
      job: "استاد دانشگاه ",
      tahsilat: " دکتری مهندسی صنایع",
      group: "2",
      id: 4,
    },
    {
      fullname: "حسن خسروجردی",
      age: "39",
      photo:
        "https://toplearn.com/img/user/teachers/268_2b05b90b-7a78-4e35-058f-39e6b8cf2ac1_%D8%AD%D8%B3%D9%86%20_%D8%AE%D8%B3%D8%B1%D9%88%D8%AC%D8%B1%D8%AF%DB%8C.jpeg",

      email: "hasan@madaeny.com",
      job: "استاد دانشگاه ",
      tahsilat: " دکتری مهندسی صنایع",
      group: "1",
      id: 5,
    },
    {
      fullname: "ایمان مدائنی",
      age: "45",
      photo:
        "https://toplearn.com/img/user/teachers/15633_2402cc6d-1d17-6a22-e6cc-39e3248f13a4_%D8%A7%DB%8C%D9%85%D8%A7%D9%86_%D9%85%D8%AF%D8%A7%D8%A6%D9%86%DB%8C.jpg",

      email: "iman@madaeny.com",
      job: "استاد دانشگاه ",
      tahsilat: " دکتری مهندسی صنایع",
      group: "1",
      id: 6,
    },
    {
      fullname: "یونس قربانی",
      age: "35",
      photo:
        "https://toplearn.com/img/user/teachers/25033_1593aba2-5cb5-6add-a31f-39e35253dd2a_%DB%8C%D9%88%D9%86%D8%B3_%D9%82%D8%B1%D8%A8%D8%A7%D9%86%DB%8C.jpg",

      email: "younes.gh@chmail.ir",
      job: "استاد دانشگاه ",
      tahsilat: " دکتری مهندسی صنایع",
      group: "1",
      id: 7,
    },
  ];

  return (
    <div>
      <div className="landing-layer">
        <Navbar />
      </div>
      <h2
        className="text-center m-3"
        style={{ fontSize: "40px", color: "#6272a4" }}
      >
        منتورها
      </h2>
      <div className="row" style={{ width: "90%", margin: "auto" }}>
        {teachersx.map((teacher) => (
          <div
            key={teacher.id}
            className="col-lg-2 col-md-4 col-sm-6 col-xs-12 term-col"
          >
            <div className="m-3 ">
              <img
                src={teacher.photo}
                alt=""
                style={{ borderRadius: "5px" }}
                className=" hhh"
              />
              <div className=" card ">
                <ul className=" text-center   list-group-flush">
                  <li className="list-group-item ">
                    نام و نام خانوداگی :{"  "}
                    <span className="fw-bold">{teacher.fullname}</span>
                  </li>
                  <li className="list-group-item">
                    سن :{"  "}
                    <span className="fw-bold">{teacher.age}</span>
                  </li>
                  <li className="list-group-item">
                    آدرس ایمیل :{"  "}
                    <span className="fw-bold">{teacher.email}</span>
                  </li>
                  <li className="list-group-item">
                    شغل:{"  "}
                    <span className="fw-bold">{teacher.job}</span>
                  </li>
                  <li className="list-group-item">
                    تحصیلات :{"  "}
                    <span className="fw-bold">{teacher.tahsilat}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

