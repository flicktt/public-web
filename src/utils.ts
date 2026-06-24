export const hasPaddingClass = (
  classString: string,
  options?: { onlyX?: boolean; onlyY?: boolean },
) => {
  const regex = options?.onlyX
    ? /(?:^|\s)p(?:x|r|l)?-[^\s]+(?:\s|$)/
    : options?.onlyY
      ? /(?:^|\s)p(?:y|t|b)?-[^\s]+(?:\s|$)/
      : /(?:^|\s)p(?:x|y|r|l|t|b)?-[^\s]+(?:\s|$)/;

  return regex.test(classString);
};
