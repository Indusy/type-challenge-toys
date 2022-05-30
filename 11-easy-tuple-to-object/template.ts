type TupleToObject<T extends readonly (string|symbol|number)[]> = {
  [P in T[number]]: P
}

// P in T[number] 遍历数组，记就 vans 了