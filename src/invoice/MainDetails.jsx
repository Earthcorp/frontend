import SiteLogo from "../components/sitelogo/siteLogo";
import { TfiEmail } from "react-icons/tfi";
import { TbPhoneCall } from "react-icons/tb";
import { CiGlobe } from "react-icons/ci";

export default function MainDetails({ phone, email, website }) {
  return (
    <>
      <section>
        <div className="md:flex items-start justify-between mt-10 mb-10">
          <div className="w-full md:w-1/2">
            <SiteLogo />
          </div>
          <div className="w-full mt-8 md:mt-0 md:w-1/2 lg:grid lg:pl-8 items-center justify-end font-semibold">
            <ul>
              <li className="flex items-center justify-start gap-2">
                <TbPhoneCall />
                <span>{phone}</span>
              </li>
              <li className="flex items-center justify-start gap-2">
                <TfiEmail />
                <span>{email}</span>
              </li>
              <li className="flex items-center justify-start gap-2">
                <CiGlobe />
                <span>
                  <a href={website} target="_blank" rel="noopenner noreferrer">
                    {website}
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
