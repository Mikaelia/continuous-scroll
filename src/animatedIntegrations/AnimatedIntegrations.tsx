import { useState, useMemo } from "react";
import PillContainer, { PillData } from "../pillContainer/PillContainer";
import Modal from "../modal/Modal";

import "./AnimatedIntegrations.css";

type IntegrationItem = {
  name: string;
  logo: string;
  id: string;
  title: string;
  description: string;
};

interface Props {
  data: IntegrationItem[];
  rowCount: number;
}

const AnimatedIntegrations = ({ data, rowCount }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [activeIntegration, setActiveIntegration] = useState<string | null>(
    null
  );

  const [modalData] = data.filter((v) => v.id === activeIntegration);

  const getRandomDuration = () => {
    return Math.random() * (50 - 30 + 1) + 30;
  };

  const handleClick = (id: string) =>
    isModalOpen ? handleCloseModal() : handleOpenModal(id);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setActiveIntegration(null);
  };

  const handleOpenModal = (id: string) => {
    setActiveIntegration(id);
    setIsModalOpen(true);
  };

  const getPillData = (data: IntegrationItem[]): PillData[] => {
    // Transform integration data into pill data (to demonstrate how data conversion might be needed in prod)
    const pillData = data.map((v) => ({
      logo: v.logo,
      id: v.id,
      label: v.name,
    }));
    // Duplication to enable infinite scroll
    return [...pillData, ...pillData];
  };

  const animatedRows = useMemo(() => {
    const countArr = Array.from({ length: rowCount }, (_, index) => index);

    return countArr.map((v) => {
      // Generate random duration values to offset row animation
      const duration = getRandomDuration();
      return (
        <PillContainer
          key={v}
          data={getPillData(data)}
          style={{ animationDuration: `${duration}s` }}
          handleClick={handleClick}
        />
      );
    });
  }, [rowCount, data]);

  return (
    <div className="integration-container">
      {animatedRows}
      {isModalOpen && (
        <Modal closeModal={handleCloseModal} modalData={modalData} />
      )}
    </div>
  );
};

export default AnimatedIntegrations;
