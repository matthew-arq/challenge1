export function insertString(original, index, string) {
  if (original !== undefined) {
    if (index > 0) {
      return (
        original.substring(0, index) +
        string +
        original.substring(index, original.length)
      );
    }

    return original;
  }
}
