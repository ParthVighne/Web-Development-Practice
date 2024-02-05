/* eslint-disable react-hooks/rules-of-hooks */
import { useSelector } from "react-redux";
import HomeItem from "../components/HomeItem";

const home = () => {
  const items = useSelector((store) => store.items);
  console.log("Got items", items);

  return (
    <main>
      <div className="items-container">
        {items.map((item) => (
          <HomeItem key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
};

export default home;
