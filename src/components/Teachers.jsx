import {Navbar} from "./Navbar";

export const Teachers = () => {
  const teachersx = [
    {
      fullname: "محمد اردوخانی",
      age: "27",
      photo:
        "https://toplearn.com/img/user/250x259/25855_b417fa24-3fb2-4cc6-be31-c04c1926f7ff_%D8%B7%D9%87_%D8%A7%D8%AE%D9%84%D8%A7%D9%82%20%D9%BE%D8%B3%D9%86%D8%AF%DB%8C.jpg",
      cources: "msp",
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
      cources: "msp, visio",
      email: "hr@gmail.com",
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
      cources: "msp",
      email: "hr@gmail.com",
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
      cources: "matlab excel",
      email: "hr@gmail.com",

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
      cources: "msp",
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
      cources: "msp, visio",
      email: "hr@gmail.com",
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
      cources: "msp",
      email: "hr@gmail.com",
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
      cources: "matlab excel",
      email: "hr@gmail.com",

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
      cources: "msp",
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
      cources: "msp, visio",
      email: "hr@gmail.com",
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
      cources: "msp",
      email: "hr@gmail.com",
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
      cources: "matlab excel",
      email: "hr@gmail.com",

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
        اساتید
      </h2>
      <div className="row " style={{ width: "90%", margin: "auto" }}>
        {teachersx.map((teacher) => (
          <div
            key={teacher.id}
            className="col-lg-2 col-md-4 col-sm-6 col-xs-12 term-col"
          >
            <article className="m-3 ">
              <img
                src={teacher.photo}
                alt=""
                style={{ borderRadius: "5px" }}
                className=" hhh"
              />
              <div className="card ">
                <ul
                  className=" text-center  list-group-flush "
                  style={{ listStyleType: "none" }}
                >
                  <li className="list-group-item">
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
                  <li className="list-group-item ">
                    شغل:{"  "}
                    <span className="fw-bold">{teacher.job}</span>
                  </li>

                  <li className="list-group-item ">
                    دوره‌ها:{"  "}
                    <span className="fw-bold">{teacher.cources}</span>
                  </li>

                  <li className="list-group-item ">
                    تحصیلات :{"  "}
                    <span className="fw-bold">{teacher.tahsilat}</span>
                  </li>
                </ul>
              </div>
            </article>
          </div>
        ))}
      </div>
    </div>
  );
};

