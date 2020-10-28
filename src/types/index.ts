import { ColumnType } from 'typeorm';
import {Relation} from "../ui";

export namespace EntityNode {
    export type EntityColumn = {
        name: string;
        dataType: ColumnType;
    }

    export type EntityIndex = {
        name: string;
        referenceColumn: string[] | string;
    };
}


export type ParseResult = {
    name: string;
    columns: EntityNode.EntityColumn[];
    indexes: EntityNode.EntityIndex[];
    relations: Relation[];
}
