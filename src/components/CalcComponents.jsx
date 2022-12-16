import { Textfit } from "react-textfit";
export const Button = ({ className, value, onClick }) => {
    return (
      <button className={className} onClick={onClick}>
        {value}
      </button>
    );
  };

export const ButtonBox = ({ children }) => {
    return <div className="buttonBox">{children}</div>;
  };
  

export const Screen = ({ value }) => {
  return (
    <Textfit className="screen" mode="single" max={70}>
      {value}
    </Textfit>
  );
};

export const Wrapper = ({ children }) => {
    return <div className="wrapper">{children}</div>;
  };
  
