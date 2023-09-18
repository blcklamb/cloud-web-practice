import React from "react";

function DummyText() {
  const LOREM = (n) => {
    const pBlock = (idx) => (
      <p key={idx}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae non
        illum fuga hic cumque doloremque veniam ad tempora. Omnis minima
        expedita vero autem. Mollitia repellat ea quae architecto consequatur
        molestias?
      </p>
    );
    return Array.from({ length: n }, (_, idx) => pBlock(idx));
  };
  return (
    <div>
      <hr></hr>
      <div>{LOREM(15)}</div>
    </div>
  );
}

export default DummyText;
