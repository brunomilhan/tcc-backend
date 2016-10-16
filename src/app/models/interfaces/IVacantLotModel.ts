import mongoose = require('mongoose');

export interface IVacantLotModel extends mongoose.Document {
    name: string;
    description: string;
    // local
    city: string;
    neighborhood: string;
    street: string;
    number: number;
    latMap: number;
    longMap: number;
    author: string;
    // how i keep photos
    status: string;
    priorityNumber: number; //maybe transform this in collection
    views: number;

}