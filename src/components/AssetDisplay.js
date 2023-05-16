import axios from "axios";
import { useEffect, useState } from "react";
import { Divider, Button, Space } from "antd";
import AssetInfo from "./AssetInfo";

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

  return (
    <>
      <Divider orientation="left">ASSET</Divider>
      <div className="container">
        <img
          className="picture"
          src={agents[agentIndex]?.picture.large}
          alt="spy grid"
        ></img>
        <p className="assetCode">
          {agents[agentIndex]?.login.username.toUpperCase()}
        </p>
      </div>
      <AssetInfo currentAgent={agents[agentIndex]} />
      <Space wrap>
        <Button type="primary" className="button">
          Next Asset
        </Button>
      </Space>
    </>
  );
}
