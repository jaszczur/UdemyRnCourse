import { FunctionComponent } from 'react';

export function nullToUndefined<T>(value: T | null): T | undefined {
  return value == null ? undefined : value;
}

export function undefinedToNull<T>(value?: T): T | null {
  return typeof value === 'undefined' ? null : value;
}

interface Provider<T> {
  (): T;
}

function isProvider<T>(x: any): x is Provider<T> {
  return typeof x === 'function';
}

export function orDefault<T>(
  value: (T | null) & (T | undefined),
  defaultValue: T | Provider<T>
): T {
  if (value == null) {
    if (isProvider(defaultValue)) {
      return defaultValue();
    } else {
      return defaultValue;
    }
  } else {
    return value;
  }
}
