import { EntityNode } from "../types";
import { Relation } from "../ui/Relation";
import { compile } from "./compile";
import ts from 'typescript';
import {ColumnType} from "typeorm";
import {isObject} from "../validate";

type ParseResult = {
    name: string;
    columns: EntityNode.EntityColumn[];
    indexes: EntityNode.EntityIndex[];
    relations: Relation[];
}

// @ts-ignore
const SyntaxKindToTypeMap: Record<ts.SyntaxKind, ColumnType> = {
    [ts.SyntaxKind.NumberKeyword]: 'number',
    [ts.SyntaxKind.StringKeyword]: 'string',
}

/**
 * @description parse entity
 */
export class Parser {
    private sourceFile: ts.SourceFile;

    constructor(fileName: string) {
        this.sourceFile = compile(fileName);
    }

    parse(): ParseResult {
        const res: ParseResult = {
            name: '',
            columns: [],
            indexes: [],
            relations: [],
        };

        ts.forEachChild(this.sourceFile, node => {
            if (ts.isClassDeclaration(node) && node.name) {
                res.name = `${node.name.escapedText}`;

                // deal with members
                node.members.forEach(member => {
                    if (ts.isPropertyDeclaration(member)) {
                        res.columns.push({
                            name: Reflect.get(member.name, 'escapedText'),
                            dataType: SyntaxKindToTypeMap[member.type!.kind],
                        })
                    }
                })

                // deal with decorators
                node.decorators?.forEach(decorator => {
                    if (ts.isCallExpression(decorator.expression)) {
                        if (ts.isIdentifier(decorator.expression.expression)) {
                            if (`${decorator.expression.expression.escapedText}` === 'Index') {
                                res.indexes.push({
                                    // @ts-ignore
                                    name: decorator.expression.arguments[0].text as any,
                                    // @ts-ignore
                                    referenceColumn: decorator.expression.arguments[1].elements.map(ele => isObject(ele) ? ele.text : '').filter(Boolean) as any,
                                })
                            }
                        }
                    }
                })
            }
        });

        return res;
    }
}
