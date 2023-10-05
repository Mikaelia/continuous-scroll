import { CSSProperties } from "react";
import Pill from "../pill/Pill";
import "./PillContainer.css";

export type PillData = {
  logo?: string;
  label: string;
  id: string;
};

interface Props {
  data: PillData[];
  style?: CSSProperties;
  handleClick: (id: string) => void;
}

const PillContainer = ({ data, style, handleClick }: Props) => {
  return (
    <div style={style} className="pill-container">
      {data.map((pillData, i) => {
        return <Pill handleClick={handleClick} key={i} {...pillData} />;
      })}
    </div>
  );
};

export default PillContainer;
