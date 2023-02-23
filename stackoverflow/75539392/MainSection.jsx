import React, { useState, useEffect } from 'react';
import { getItems } from './Database';

function MainSection() {
  const [items, setItems] = useState([]);
  console.log("🚀 ~ file: MainSection.jsx:6 ~ MainSection ~ items:", items)

  useEffect(() => {
    getItems().then((res) => setItems(res));
  }, []);

  return (
    <section>
      <article className="items_container-main">
        <div className="items_container" role="list">
          {items.map((item) => {
            return <div key={item.id} role='listitem'>{item.title}</div>;
          })}
        </div>
      </article>
    </section>
  );
}

export default MainSection;
