import { EntityNode } from '../types';
import EntityColumn = EntityNode.EntityColumn;

/**
 * @description represent entity
 */
export class Node {
    private name: string;
    private columns: EntityColumn[];
    private indexes: Array<string | string[]>;

    constructor() {
        this.name = '';
        this.columns = [];
        this.indexes = [];
    }

    addColumn(column: EntityColumn) {
        this.columns.push(column);
    }

    addIndex(index: string[] | string) {
        this.indexes.push(index);
    }

    render() {

    }
}
