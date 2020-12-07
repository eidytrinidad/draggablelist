import React from 'react'
import { MusicaEsperaControles } from '../components/MusicaEsperaControles'
import { MusicaEsperaForm } from '../components/MusicaEsperaForm'
import { MusicEsperaLista } from '../components/MusicEsperaLista'

export const MusicaenEspera = () => {
    return (
        <div className="container musicaespera">
            <div className="row d-flex flex-column mt-4">
                <div className="col bg-secondary my-4">
                    <MusicaEsperaForm/>
                </div>
                <div className="col bg-secondary my-4">
                    <MusicaEsperaControles/>
                </div>
                <div className="col my-4">
                    <MusicEsperaLista/>
                </div>
            </div>
        </div>
    )
}
