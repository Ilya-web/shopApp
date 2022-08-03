export const normalizeCategory = (category?: string, flag?: boolean): string | undefined => {
  if (!category) return undefined;
  if (flag) {
    return category.replace(' ', '-');
  }
  return category.replace('-', ' ');
};
