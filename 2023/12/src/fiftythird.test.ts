class MyStack {
    private queue: number[] = [];
    constructor() {}

    push(x: number): void {
        this.queue.push(x);
    }

    pop(): number {
        if (!this.queue.length) {
            return 0;
        }

        for (let i = 0; i < this.queue.length - 1; i++) {
            this.push(this.queue.shift()!);
        }
        return this.queue.shift()!;
    }

    top(): number {
        const popNum: number = this.pop();
        this.push(popNum);

        return popNum;
    }

    empty(): boolean {
        return !this.queue.length;
    }
}
