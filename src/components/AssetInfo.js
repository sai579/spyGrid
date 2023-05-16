export default function AssetInfo({ currentAgent }) {
  const agentEyeColor = ["black", "brown", "red", "green", "blue"];
  return (
    <ul className="assetInfo">
      <li>firstname: {currentAgent?.name.first}</li>
      <li>lastname: {currentAgent?.name.last}</li>
      <li>sex: {currentAgent?.gender}</li>
      <li>city: {currentAgent?.location.city}</li>
      <li>state: {currentAgent?.location.state}</li>
      <li>country: {currentAgent?.location.country}</li>
      <li>birthdate: {currentAgent?.dob.date}</li>
      <li>time zone offset: {currentAgent?.location.timezone.offset}</li>
      <li>
        time zone description: {currentAgent?.location.timezone.description}
      </li>
      <li>
        eye color:{" "}
        {agentEyeColor[Math.floor(Math.random() * agentEyeColor.length)]}
      </li>
    </ul>
  );
}
