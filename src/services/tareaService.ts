'use strict';

import { TareaRepository } from './../repositories/tareaRepository';


export class TareaService {
    static findAll(query: any): Promise<any> {
        return new Promise((resolve: any, reject: any) => {
            TareaRepository.findAll(query)
                .then((data: any) => {
                    resolve({ status: 200, payload: data });
                })
                .catch((err: any) => {
                    reject(err);
                });
        })
    }

    static create(data: any): Promise<any> {
        return new Promise((resolve: any, reject: any) => {

            TareaRepository.create(data)
                .then((data: any) => {
                    resolve({ status: 201, payload: data });
                })
                .catch((err: any) => {
                    reject(err);
                });

        })
    }
}