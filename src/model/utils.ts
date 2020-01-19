export class Queue<T> {
  container: T[]

  constructor() {
    this.container = []
  }

  get length() {
    return this.container.length
  }

  // A method just to see the contents while we develop this class
  toString() {
    return this.container.toString()
  }

  // Checking if the array is empty
  isEmpty() {
    return this.container.length === 0
  }

  enqueue(value: T) {
    this.container.push(value)
  }

  dequeue() {
    if (this.isEmpty()) return undefined
    return this.container.shift()
  }
}

export function delay(timeout: number) {
  return new Promise<void>(resolve => {
    setTimeout(resolve, timeout)
  })
}
