import FeatherIcon from "feather-icons-react";
import Link from "next/link";
import CreateProfileForm from "@app/components/forms/CreateProfileForm";

const Page = () => {
  return (
    <>
      <div className='content'>
        <div className='row'>
          <div className='col-sm-7 col-6'>
            <ul className='breadcrumb'>
              <li className='breadcrumb-item'>
                <Link href='/#'>Demographics </Link>
              </li>
              {/* <li className='breadcrumb-item'>
                <FeatherIcon
                  className='feather-chevron-right'
                  icon='chevron-right'
                />
              </li> */}
              {/* <li className='breadcrumb-item active'>Create Profile</li> */}
            </ul>
          </div>
        </div>
        <CreateProfileForm />
      </div>
    </>
  );
};

export default Page;