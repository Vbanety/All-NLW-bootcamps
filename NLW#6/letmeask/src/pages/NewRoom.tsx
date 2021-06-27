import { Link, useHistory } from 'react-router-dom'
import {FormEvent, useState} from 'react'

import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'

import '../styles/auth.scss'
import { Button } from '../components/Button';
import { database } from '../services/firebase'
import { useAuth } from '../hoots/useAuth';
// import userEvent from '@testing-library/user-event'

export function NewRoom() {
    const { user } = useAuth()
    const history = useHistory()
    const [newRoom, setNewRom] = useState('')

    async function HandleCreateNewRoom(event: FormEvent) {
        event.preventDefault();

        if (newRoom.trim() === '') {
            return;
        }

        const roomRef = database.ref('rooms')

        const firebaseRoom = await roomRef.push({
            title: newRoom,
            authorId: user?.id,
        })

        history.push(`/rooms/${firebaseRoom.key}`)
    }

    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Ilustration simble ask and anwers" />
                <strong>Criar salas de Q&amp;a ao-vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo real</p>
            </aside>

            <main>
                <div className="main-content">
                    <img src={logoImg} alt="Latmeask" />
                    
                    <h2>Criar uma nova sala</h2>
                    <form onSubmit={HandleCreateNewRoom}>
                        <input 
                            type="text"
                            placeholder="Nome da sala"
                            onChange={event => setNewRom(event.target.value)}
                            value={newRoom}
                        />
                        <Button type="submit">
                            Criar sala
                        </Button>
                    </form>
                    <p>
                        Quer entrar em uma sala existente <Link to="/">clique aqui</Link>
                    </p>
                </div>
            </main>
        </div>
    )
}

// codigo UNIDADE