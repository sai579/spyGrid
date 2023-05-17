import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Space } from "antd";
import AssetInfo from "./AssetInfo";
import AssetLoginId from "./AssetLoginId";

export default function AssetDisplay() {
  const [agents, setAgents] = useState([]);
  const [agentIndex, setAgentIndex] = useState(0);

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?results=10")
      .then((agentsData) => {
        console.log("agentsData -===", agentsData);
        setAgents(agentsData.data.results);
      })
      .catch((err) => {
        console.log("err ===", err);
      });
  }, []);

  const handleNextAgentClick = () => {
    let currentAgentIndex = agentIndex;
    if (currentAgentIndex < agents.length) {
      currentAgentIndex++;
      setAgentIndex(currentAgentIndex);
    }
  };

  return (
    <>
      <AssetLoginId assetLogin={agents[agentIndex]?.login.uuid} />
      <h2>SPY GRID</h2>
      <div className="container">
        <img
          className="picture"
          src={agents[agentIndex]?.picture.large}
          alt="spy grid"
        ></img>
        <div className="assetCode">
          {agents[agentIndex]?.login.username.toUpperCase()}
        </div>
      </div>

      <AssetInfo currentAgent={agents[agentIndex]} />
      <Space wrap>
        <Button
          type="primary"
          className="button site-button-ghost-wrapper"
          onClick={handleNextAgentClick}
          disabled={agentIndex === agents.length - 1}
        >
          Next Asset
        </Button>
      </Space>
    </>
  );
}
