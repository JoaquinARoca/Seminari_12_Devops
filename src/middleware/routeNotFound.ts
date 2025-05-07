import express, { Request, Response } from 'express';
import x from 'x-ray';

const hola: any = 'mundo'; // ❌ viola @typescript-eslint/no-explicit-any

export function routeNotFound(req: Request, res: Response) {
    const error = new Error('Route Not Found');

    console.log(error);

    res.status(404).json({ error: error.message }); // ojo aqui que si no posem error.message no s'envia l'error!!!
}
