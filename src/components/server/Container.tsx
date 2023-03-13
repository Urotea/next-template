type Props = {
  children?: React.ReactNode;
};

const Container: React.FC<Props> = ({ children }) => {
  return <div className="container mx-auto">{children}</div>;
};

export default Container;
