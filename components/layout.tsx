import Header from './header';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => (
  <>
    <Header />
    <div className="m-16">{children}</div>
  </>
);

export default Layout;
