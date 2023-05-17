export default function AssetInfo({ currentAgent }) {
  const agentEyeColor = ["black", "brown", "red", "green", "blue"];
  return (
    <ul className="assetInfo">
      <li>
        <b>firstname:</b> {currentAgent?.name.first}
      </li>
      <li>
        <b>lastname:</b> {currentAgent?.name.last}
      </li>
      <li>
        <b>sex:</b> {currentAgent?.gender}
      </li>
      <li>
        <b>city:</b> {currentAgent?.location.city}
      </li>
      <li>
        <b>state:</b>
        {currentAgent?.location.state}
      </li>
      <li>
        <b>country:</b> {currentAgent?.location.country}
      </li>
      <li>
        <b>birthdate:</b> {currentAgent?.dob.date}
      </li>
      <li>
        <b>time zone offset:</b>
        {currentAgent?.location.timezone.offset}
      </li>
      <li>
        <b>time zone description:</b>:{" "}
        {currentAgent?.location.timezone.description}
      </li>
      <li>
        <b>eye color:</b>
        {agentEyeColor[Math.floor(Math.random() * agentEyeColor.length)]}
      </li>
    </ul>
  );
}
