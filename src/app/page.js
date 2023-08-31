import Banner from "@/components/HomePage/Banner/Banner";
import GetInTouch from "@/components/HomePage/GetInTouch/GetInTouch";
import Technology from "@/components/HomePage/Technology/Technology";
import Testimonial from "@/components/HomePage/Testimonial/Testimonial";
import WhatIdo from "@/components/HomePage/WhatIdo/WhatIdo";

export default function Homepage() {
  return (
    <div>
      <Banner />
      <WhatIdo />
      <Technology />
      <Testimonial />
      <GetInTouch
        title="Contact"
        subTitle="Get in Touch"
        description="Let's work together"
        location="Chuadanga, Bangladesh"
        email="Lbshaft01@gmail.com"
        phone="+8801925010214"
        buttonText="Send"
      />
    </div>
  );
}
