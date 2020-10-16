export class DataTableInput {
    titles: { titleFor: string, title: string, keep?: boolean }[];
    data: any[];

    constructor() {
        this.titles = [];
        this.data = [];
    }
}
