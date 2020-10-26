import { ColumnType } from 'typeorm';

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

