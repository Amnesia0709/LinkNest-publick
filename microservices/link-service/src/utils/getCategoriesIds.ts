import prisma from "../database/prisma";

// Нахождение id категории по имени
const findIdByCategoryName = async (
  categoryName: string,
): Promise<number | null> => {
  const category = await prisma.categories.findUnique({
    where: {
      name: categoryName,
    },
    select: {
      id: true,
    },
  });

  return category ? category.id : null;
};

const createCategory = async (category: string): Promise<number | null> => {
  const newCategory = await prisma.categories.create({
    data: {
      name: category,
    },
  });

  return newCategory.id;
};

export const getCategoriesIds = async (
  categoriesList: string[],
): Promise<number[]> => {
  return await Promise.all(
    categoriesList.map(async (category: string) => {
      const categoryId = await findIdByCategoryName(category);

      if (categoryId !== null) {
        return categoryId;
      }

      return await createCategory(category);
    }),
  );
};
