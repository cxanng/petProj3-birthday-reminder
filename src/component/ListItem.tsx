import React from "react";

export type Item = {
  id: number,
  name: string,
  age: number,
  image: string,
}

const ListItem = ({ data }: { data: Item}) => {
  return (
    <div className="list-item" key={`list-item-${data.id}`}>
      <img src={data.image} alt="" style={{}}/>
      <div className='info'>
        <div className='name'>{data.name}</div>
        <div className='age'>{data.age} years old</div>
      </div>
    </div>
  )
}

export default ListItem;