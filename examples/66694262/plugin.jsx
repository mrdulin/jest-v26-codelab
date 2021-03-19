export const Plugins = ({ pluginsData, history }) => {
  return (
    <ul className="plugin-list">
      <li appearance="subtle" weight="medium" className="item" onClick={() => history.push(`/list/plugins`)}>
        Plugins
      </li>
      {pluginsData.length
        ? pluginsData.map((item, index) => (
            <li className="up-coming-text" key={index}>
              {item.plugin}
            </li>
          ))
        : ' No Data'}
    </ul>
  );
};
