import { createEntry, deleteEntry, getAllForum, getEntryById, updateEntry } from './forum_service.js';
import { Request, Response } from 'express';

export const createEntryHandler = async (req: Request, res: Response) => {
    try {
        const data = await createEntry(req.body);
        res.json(data);
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        } else {
            res.status(500).json({ message: 'An unknown error occurred' });
        }
    }
};
export const getAllForumHandler = async (req: Request, res: Response) => {
    try {
        const data = await getAllForum();
        res.json(data);
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        } else {
            res.status(500).json({ message: 'An unknown error occurred' });
        }
    }
};
export const getEntryByIdHandler = async (req: Request, res: Response) => {
    try {
        const data = await getEntryById(req.params.id);
        res.json(data);
    }catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        } else {
            res.status(500).json({ message: 'An unknown error occurred' });
        }
    }
};
export const updateEntryHandler = async (req: Request, res: Response) => {
    try {
        const data = await updateEntry(req.params.id, req.body);
        res.json(data);
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        } else {
            res.status(500).json({ message: 'An unknown error occurred' });
        }
    }
};
export const deleteEntryHandler = async (req: Request, res: Response) => {
    try {
        const data = await deleteEntry(req.params.id);
        res.json(data);
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        } else {
            res.status(500).json({ message: 'An unknown error occurred' });
        }
    }
};
