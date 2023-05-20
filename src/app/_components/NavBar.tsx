type Props = {
  title: string;
};

const NavBar: React.FC<Props> = ({ title }) => {
  return (
    <div className="navbar bg-primary text-primary-content">
      <h1 className="text-xl">{title}</h1>
    </div>
  );
};

export default NavBar;
