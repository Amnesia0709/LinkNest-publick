import prisma from "../database/prisma";

const findIdByAuthorName = async (
  authorName: string,
): Promise<number | null> => {
  const author = await prisma.authors.findUnique({
    where: {
      author: authorName,
    },
    select: {
      id: true,
    },
  });

  return author ? author.id : null;
};

const createAuthor = async (authorName: string): Promise<number> => {
  const newAuthor = await prisma.authors.create({
    data: {
      author: authorName,
    },
  });

  return newAuthor.id;
};

const getAuthorsIds = async (authorsList: string[]): Promise<number[]> => {
  return await Promise.all(
    authorsList.map(async (author: string) => {
      /**
         Поиск автора в уже существующих таблицах, если он сусществуешь в список добавляется id существующего автора,
         если автора нет в списке, то создается новый авторы и возвращается id нового автора
       */
      const authorId = await findIdByAuthorName(author);

      if (authorId !== null) {
        return authorId;
      }

      return await createAuthor(author);
    }),
  );
};

export default getAuthorsIds;
