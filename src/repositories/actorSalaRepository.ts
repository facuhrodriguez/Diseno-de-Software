'use strict'

import * as mongoose from 'mongoose';
import { ActorSalaSchema } from './../models/actorSala';

const ActorSalaModel: any = mongoose.model('Actor-Sala', ActorSalaSchema);

export class ActorSalaRepository {
    static findAll(query: any){
        
        return new Promise((resolve: any, reject: any) => {
            ActorSalaModel.find(query)
                .then((data: any) => {
                    if (data) {
                        resolve(data)
                    } else 
                        resolve();
                })
                .catch((err: any) => {
                    console.error(err);
                })
        })
    }

    static create(data: any) {

        return new Promise((resolve: any, reject: any) => {
            const _data: any = {};
            if (data.usuario)
                _data.usuario = data.usuario;
            if (data.sala)
                _data.sala = data.sala;

            if (data.rol)
                _data.rol = data.rol;

            const newClient = new ActorSalaModel(_data);
            newClient.save()
                .then((newClient: any) => {
                    if (newClient)
                        resolve(newClient.getBasic());
                    else
                        resolve();
                })
                .catch((err: any) => {
                    reject({ msg: ('ACTOR.ERROR_CREATE'), error: err })
                })
        });

    }
}
