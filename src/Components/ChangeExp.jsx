import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { deleteExperiencesAction, postExperiencesAction } from '../redux/actions';
import {postFormAction} from '../redux/actions';

function ChangeExp(props) {
  const [role, setRole] = useState("")
  const [company, setCompany] = useState("")
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [description, setDescription] = useState("")
  const [area, setArea] = useState("")
  const oldData = useSelector((state)=> state.profile.content)
  const newData = useSelector((state) => state.experiences.content)
  const oldExp = useSelector((state) => state.allExp.content)
  const dispatch = useDispatch()
    
  const handleSubmit = (e) =>{
    e.preventDefault()
    dispatch(postFormAction({role, company, startDate, endDate, description, area}))
    props.onHide()
  }

  const handleDelete = (e) =>{
    e.preventDefault()
    // dispatch(deleteExperiencesAction(oldData._id, props.id))

  }

  useEffect(()=> {
    if(newData !== null){
      dispatch(postExperiencesAction(newData, oldData._id))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[oldExp])

  
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Inserisci la tua esperienza
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Ruolo</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ruolo"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                autoFocus
              />
              <Form.Label>Azienda</Form.Label>
              <Form.Control
                type="text"
                placeholder="Cognome"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                autoFocus
              />
              <Form.Label>Data di inizio</Form.Label>
              <Form.Control
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Data di fine</Form.Label>
              <Form.Control 
              type="date" 
              rows={3}
              value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
              <Form.Label>Descrizione</Form.Label>
              <Form.Control
                type="textarea"
                placeholder="es.: Web Developer"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                autoFocus
              />
              <Form.Label>Città</Form.Label>
              <Form.Control
                type="text"
                placeholder="Città"
                value={area}
                onChange={(e) => setArea(e.target.value)}
                autoFocus
              />
            </Form.Group>
            <Modal.Footer className="justify-content-between">
                <Button variant="danger" onClick={handleDelete}>Elimina questa esperienza</Button>
                <div>
                    <Button className="mx-1" onClick={props.onHide}>Annulla</Button>
                    <Button variant="success" onClick={handleSubmit}>
                        Salva le modifiche
                    </Button>
                </div>
      </Modal.Footer>
          </Form>
        </Modal.Body>
      
    </Modal>
  );
}
export default ChangeExp