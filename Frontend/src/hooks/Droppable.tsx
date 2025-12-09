import React from 'react';
import {useDroppable} from '@dnd-kit/core';


interface DroppableProps {
  id: string; // the droppable zone ID
  children?: React.ReactNode;
}

export function Droppable(props: DroppableProps) { // TODO: Change props to some equipment type on implementation @TODO
  const {isOver, setNodeRef} = useDroppable({
    id: props.id,
  });
  const style = {
    color: isOver ? 'green' : undefined,
  };
  
  
  return (
    <div ref={setNodeRef} style={style}>
      {props.children}
    </div>
  );
}