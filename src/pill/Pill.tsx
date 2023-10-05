import "./Pill.css";

interface Props {
  logo?: string;
  label: string;
  id: string;
  handleClick: (id: string) => void;
}

const Pill = ({ logo, label, id, handleClick }: Props) => {
  return (
    <div className="pill" id={id} onClick={() => handleClick(id)}>
      <img className="pill__logo" src={logo} alt="logo"></img>
      <p>{label}</p>
    </div>
  );
};

export default Pill;
