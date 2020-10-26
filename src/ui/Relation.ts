enum RelationType {
    ONE2ONE = 1,
    ONE2MANY,
    MANY2MANY,
}

/**
 * @description represent relationship between nodes
 */
export class Relation {
    private relationType: RelationType;
    private from: string;
    private to: string;

    constructor() {
        this.relationType = RelationType.MANY2MANY;
        this.from = '';
        this.to = '';
    }
}
