import {Request, Response} from 'express';
import {Pet} from '../models/pet';
import {create_menu_object} from '../helper/create_menu_object';

export const home = (req: Request, res: Response) => {
    let list = Pet.getAll();
    res.render('pages/page', {
        menu: create_menu_object('all'),
        banner: {
            title: 'Todos os animais',
            background: 'allanimals.jpg'
        },
        list: list
    });
}

export const dogs = (req: Request, res: Response) => {
    let list = Pet.getFromType('dog');

    res.render('pages/page', {
        menu: create_menu_object('dog'),
        banner: {
            title: 'Cachorros',
            background: 'banner_dog.jpg'
        },
        list: list
    });
}

export const cats = (req: Request, res: Response) => {
    let list = Pet.getFromType('cat');
    
    res.render('pages/page', {
        menu: create_menu_object('cat'),
        banner: {
            title: 'Gatos',
            background: 'banner_cat.jpg'
        },
        list: list
    });
}

export const fishes = (req: Request, res: Response) => {
    let list = Pet.getFromType('fish');
    
    res.render('pages/page', {
        menu: create_menu_object('fish'),
        banner: {
            title: 'Peixes',
            background: 'banner_fish.jpg'
        },
        list: list
    });
}