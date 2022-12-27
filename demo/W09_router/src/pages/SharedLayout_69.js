import { Link, Outlet } from 'react-router-dom';
import Navbar_69 from '../components/Navbar_69';

const SharedLayout_69 = () => {
  return (
    <>
      <Navbar_69 />
      <section className='section'>
        <Outlet />
      </section>
    </>
  );
};
export default SharedLayout_69;
