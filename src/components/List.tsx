import React, {FC} from 'react';

interface IProps {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

const List: FC<IProps> = ({people}) => {
  const renderList = () : JSX.Element[] => {
    return people.map((person) => {
      return <li className='List'>
        <div className='List-header'>
          <img className='List-img' src={person.url}/>
          <h2>{person.name}</h2>
        </div>
        <p>{person.age} years old</p>
        <p className='List-note'>{person.note}</p>
      </li>
    })
  }

  return (
    <div>
      {renderList()}
    </div>
  );
};

export default List;