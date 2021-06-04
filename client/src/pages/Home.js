import axios from "axios";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import DragAndDrop from "../components/DragAndDrop";
import TodoList from "../components/TodoList";

const Home = () => {
  const [note, setNote] = useState(null)

  const displayNote = async (noteID) => {
    try {
      let res = await axios.get(`/api/notes/${noteID}`)
      setNote(res.data)
      openTodoList(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  const openTodoList = (note) => {
    return(
      <TodoList key={note.id} note={note}/>
    )
  }

  return(
    <div className='home'>
      <Row>
        <Col>
          <div className='todo-list-container'>
            {!note && 
              <h1 className='todo-list-default-text'>create or select a note...</h1>
            }
            {note && openTodoList(note)}
          </div>
        </Col>
        <Col md={5}>
          <DragAndDrop displayNote={displayNote} />
        </Col>
      </Row>
    </div>
  )
}


export default Home