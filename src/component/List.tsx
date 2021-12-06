import React from "react";
import { Item } from './ListItem';
import ListItem from "./ListItem";

const List = ({ data }: { data: Item[]}) => {
  return (
    <div className="list">
      {data.map(item => <ListItem data={item} key={item.id}/>)}
    </div>
  )
}

export default List