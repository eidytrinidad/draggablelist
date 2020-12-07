import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { musicaenespera } from "../helpers/musica";
import { Pagination } from "./Pagination";

export const MusicEsperaLista = () => {
  const [musicaespera, setMusica] = useState(musicaenespera);
  const [newIndex, setNewIndex] = useState([]);
  for (let i = 0; i < musicaespera.length; i++) {}

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(4);

  const indexOfLastitems = currentPage * itemsPerPage;
  const indexOfFirstitems = indexOfLastitems - itemsPerPage;

  const currentItems = musicaespera.slice(indexOfFirstitems, indexOfLastitems);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  function handleOnDragEnd(result) {
    console.log(result);
    if (!result.destination) return;

    const items = Array.from(musicaespera);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    // console.log(result.destination.index);

    console.log(result.source.index);
    setMusica(items);
  }

  return (
    <>
      <table className="table text-center meLista">
        <thead>
          <tr>
            <th>Posision</th>
            <th>NOMBRE</th>
            <th>OPERACION</th>
          </tr>
        </thead>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="musicaespera">
            {(provided) => (
              <tbody {...provided.droppableProps} ref={provided.innerRef}>
                {currentItems.map(({ id, name, posicion }, index) => (
                  <Draggable key={id} draggableId={String(id)} index={posicion}>
                    {(provided) => (
                      <tr
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        <td>
                          <div className="posicion">{posicion}</div>
                        </td>
                        <td>
                          <div className="nombre">{name}</div>
                        </td>
                        <td>
                          <button className="btn btn-danger">-</button>
                        </td>
                      </tr>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </tbody>
            )}
          </Droppable>
        </DragDropContext>
      </table>

      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={musicaespera.length}
        paginate={paginate}
      />
    </>
  );
};
