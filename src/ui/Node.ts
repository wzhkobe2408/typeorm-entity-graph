import {EntityNode, ParseResult} from '../types';
import EntityColumn = EntityNode.EntityColumn;
import {createElement} from "../helpers";

/**
 * @description represent entity
 */
export class Node {
    private parseResult: ParseResult;

    constructor(parseResult: ParseResult) {
        this.parseResult = parseResult;
    }

    addColumn(column: EntityColumn) {
        this.parseResult.columns.push(column);
    }

    addIndex(index: EntityNode.EntityIndex) {
        this.parseResult.indexes.push(index);
    }

    render() {
        const { columns, name, indexes, relations } = this.parseResult;

        /* Header */
        const Header = createElement('div');
        Header.innerText = name;

        /* Columns */
        const Columns = document.createElement('div');
        const ColumnItems = columns.map(column => {
            const el = document.createElement('div');
        })
    }
}
