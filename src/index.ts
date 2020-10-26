import path from 'path';
import glob from 'glob';
import watchPack from 'watchpack';
import typeorm from 'typeorm';
import yargs from 'yargs';
import chalk from "chalk";
import util from 'util';
import {Parser} from "./process/parser";

// if user need to config a file
// schema

/**
 * {
 *     entityPath: absolute path,
 *     previewPort: number,
 *     watch: boolean,
 * }
 */


/**
 * 1. read all entities file content
 * 2. focus on decorators
 * 3. each entities class represent a node in graph
 * 4. relationship: 1-1 1-n n-1 n-n
 */

const entityBasePath = path.resolve(__dirname, '../examples/entities');

function getEntityPath(entity: string) {
    return `${entityBasePath}/${entity}.ts`;
}

const globPromise = util.promisify(glob);

globPromise(`${entityBasePath}/*.ts`)
    .then(filePath => {
        console.log('filePath', filePath);
    })

// const parser = new Parser(getEntityPath('post'));
//
// console.dir(parser.parse());
