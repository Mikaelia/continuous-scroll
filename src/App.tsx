import "./App.css";
import AnimatedIntegrations from "./animatedIntegrations/AnimatedIntegrations";
import { IntegrationsData } from "./fixtures";

export default function App() {
  return (
    <div className="main">
      <section className="integration-section">
        <AnimatedIntegrations
          data={IntegrationsData}
          rowCount={5}
        ></AnimatedIntegrations>
      </section>
    </div>
  );
}
