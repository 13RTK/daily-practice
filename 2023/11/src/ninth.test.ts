export function tailSwap(arr: [string, string]): [string, string] {
    const tempStr: string = arr[0].split(":")[1];
    arr[0] = `${arr[0].split(":")[0]}:${arr[1].split(":")[1]}`;
    arr[1] = `${arr[1].split(":")[0]}:${tempStr}`;

    return arr;
}
