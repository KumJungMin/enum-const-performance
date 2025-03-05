export function benchmarkEnum(getValue: () => any, iterations: number = 1000000): number {
  const start = performance.now();
  for (let i = 0; i < iterations; i++) {
    getValue();
  }
  return performance.now() - start;
}
