function* range(start, end) {
  while (start < end) {
    // Return value and wait until next execution
    yield start;
    start += 1;
  }
}

for (const i of range(1, 10)) {
  console.log(i);
}