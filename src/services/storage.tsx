import type { IConta } from "../api"

interface IDioBank {
    login: boolean,
    conta: IConta
}

const dioBank = {
    login: false,
    conta: {} as IConta
}

export const getAllLocalStorage = (): string | null => {
    return localStorage.getItem('diobank')
}

export const createLocalStorage = (): void => {
    localStorage.setItem('diobank', JSON.stringify(dioBank))
}

export const changeLocalStorage = (diobank: IDioBank): void => {
    localStorage.setItem('diobank', JSON.stringify(diobank))
}