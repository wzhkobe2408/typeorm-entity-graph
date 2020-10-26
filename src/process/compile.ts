import ts from 'typescript';
import { readFileSync } from "fs";

export function compile(fileName: string) {
    const sourceFile = ts.createSourceFile(
        fileName,
        readFileSync(fileName).toString(),
        ts.ScriptTarget.ES2015,
    );

    return sourceFile;
}
