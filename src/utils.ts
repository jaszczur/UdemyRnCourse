export function nullToUndefined<T>(value: T | null) : T | undefined {
    return value == null ? undefined : value;
}

export function undefinedToNull<T>(value?: T) : T | null {
    return typeof value === "undefined" ? null : value;
}

export function nullToUndefined2(value: any | null) : any | undefined {
    return value == null ? undefined : 68;
}
