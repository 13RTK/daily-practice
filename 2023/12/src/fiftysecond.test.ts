class MyQueue {
    private inStack: number[] = [];
    private outStack: number[] = [];
    constructor() {}

    push(x: number): void {
        this.inStack.push(x);
    }

    pop(): number {
        if (!this.outStack.length && !this.inStack.length) {
            return 0;
        }

        if (!this.outStack.length) {
            this.migrateStack();
        }

        return this.outStack.pop()!;
    }

    peek(): number {
        if (!this.outStack.length && !this.inStack.length) {
            return 0;
        }

        if (!this.outStack.length) {
            this.migrateStack();
        }

        return this.outStack.at(-1)!;
    }

    empty(): boolean {
        return !this.outStack.length && !this.inStack.length;
    }

    private migrateStack(): void {
        while (this.inStack.length) {
            this.outStack.push(this.inStack.pop()!);
        }
    }
}
