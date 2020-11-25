import { useState, useEffect } from 'react';
import firebase from '../../services/firebase';


const database = firebase.database();

export default function Coment(){

    const [coments,setComents] = useState([]);
    const [name, setName] = useState('')
    const [coment, setComent] = useState('')

    useEffect(() => {
        database.ref('comentarios').on('value', snapshot => {
            const data = [];
            snapshot.forEach( item => {
                data.push(item);
            })
            setComents(data);
        });
    },[setComents]);

    function handleSaveComent(e){
        e.preventDefault();
        console.log('foi');
        database.ref('comentarios').push({
            name: name,
            coment: coment
        })
        .then(response => {
          
        })
        .catch(error => {
            
        });
    }

    return (
        <div>
            <form
                onSubmit={handleSaveComent}
            >
                <input 
                    type='text'
                    value={name}
                    onChange={ event => setName(event.target.value)}
                />
                <textarea
                    value={coment}
                    onChange={event => setComent(event.target.value)}
                />
                <button type='submit'>Enviar Comentario</button>
            </form>
            <main>
                <article>
                    <strong>Name</strong>
                    <p>Comentario teste fds</p>
                </article>
            </main>
        </div>
    );
};