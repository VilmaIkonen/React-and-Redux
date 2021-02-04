import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const List = () => {

  const list = useSelector(state => state.ls.list);
  const dispatch = useDispatch();

  return (
    <div>
      <ul>
        <li>Vilma</li>
        <li>newbie</li>
      </ul>
    </div>
  );
};

export default List;