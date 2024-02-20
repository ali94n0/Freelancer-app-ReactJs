import { Link } from "react-router-dom";


function Home() {
    return (
      <div className="container max-w-screen-lg min-h-screen  bg-secondary-100">
          <div className="flex flex-col items-center md:flex-row pt-20 md:pt-40 ">
            <div className="flex items-center justify-center w-full lg:w-3/5  md:w-4/5 h-auto">
              <img src="HomePic.png" alt="freelancer-app" className=" object-cover"/>
            </div>
            <div className="flex flex-col p-4  ">
              <div className="flex flex-col gap-y-6 text-secondary-800">
                <h1 className="font-black text-2xl te">برون سپاری پروژه و استخدام فریلنسر</h1>
                <p className="leading-6">با بهترین استعدادها و بهترین قیمت کار کنید و در هزینه و زمان صرفه جویی کنید</p>
              </div>
              <div className="flex items-center justify-center mx-2 my-6 p-4">
                <Link to={"/auth"} className="btn--primary px-5 py-3  font-bold rounded-lg">رایگان شروع کنید </Link>
              </div>
            </div>
          </div>
      </div>
    );
}

export default Home;