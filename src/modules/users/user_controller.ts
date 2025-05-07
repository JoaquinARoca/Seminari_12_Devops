// src/controllers/user_controller.ts
import { saveMethod, createUser, getAllUsers, getUserById, updateUser, deleteUser } from '../users/user_service.js';

import { Request, Response } from 'express';

export const saveMethodHandler = async (req: Request, res: Response) => {
    try {
        const data = saveMethod();
        res.json(data);
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        } else {
            res.status(500).json({ message: 'An unknown error occurred' });
        }
    }
};
export const createUserHandler = async (req: Request, res: Response) => {
    try {
        const data = await createUser(req.body);
        res.json(data);
    }catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        } else {
            res.status(500).json({ message: 'An unknown error occurred' });
        }
    }
};
export const getAllUsersHandler = async (req: Request, res: Response) => {
    try {
        const data = await getAllUsers();
        res.json(data);
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        } else {
            res.status(500).json({ message: 'An unknown error occurred' });
        }
    }
};
export const getUserByIdHandler = async (req: Request, res: Response) => {
    try {
        const data = await getUserById(req.params.id);
        res.json(data);
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        } else {
            res.status(500).json({ message: 'An unknown error occurred' });
        }
    }
};
export const updateUserHandler = async (req: Request, res: Response) => {
    try {
        const data = await updateUser(req.params.id, req.body);
        res.json(data);
    }catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        } else {
            res.status(500).json({ message: 'An unknown error occurred' });
        }
    }
};
export const deleteUserHandler = async (req: Request, res: Response) => {
    try {
        const data = await deleteUser(req.params.id);
        res.json(data);
    }catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        } else {
            res.status(500).json({ message: 'An unknown error occurred' });
        }
    }
};
