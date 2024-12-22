import prisma from "../database/prisma";
import { ILink } from "../interface/Link";
import { getCategoriesIds } from "../utils/getCategoriesIds";
import getAuthorsIds from "../utils/getAuthorsIds";
import { links } from "@prisma/client";
import createComment from "../utils/createComment";
import { changingOutputListOfUsers } from "../utils/changingOutputListOfLinks";

class LinkService {
  public getAllLinks = async () => {
    const usersList = await prisma.links.findMany({
      include: {
        interestlevels: {
          select: {
            interest_level: true,
          },
        },
        comments: {
          select: {
            comment: true,
          },
        },
        linksauthors: {
          select: {
            authors: {
              select: {
                author: true,
              },
            },
          },
        },
        linkscategories: {
          select: {
            categories: {
              select: {
                name: true,
              },
            },
          },
        },
      },
    });


    const formattedUsersList: Object = changingOutputListOfUsers(usersList);

    console.log(formattedUsersList)

    return formattedUsersList;
  };

  public createLink = async (body: ILink) => {
    const searchLinkInDatabase = await prisma.links.findUnique({
      where: {
        url: body.url,
      },
    });

    if (searchLinkInDatabase) {
      return createComment(body.url, body.comment);
    } else {
      const categoriesIds = await getCategoriesIds(body.categories);
      const authorsIds = await getAuthorsIds(body.authors);

      // todo Появилась не известная ошибка при доавблении комментариев
      const newLink: links = await prisma.links.create({
        data: {
          url: body.url,
          title: body.title,
          linkscategories: {
            create: categoriesIds.map((categoryId: number) => ({
              categories: {
                connect: {
                  id: categoryId,
                },
              },
            })),
          },
          linksauthors: {
            create: authorsIds.map((authorId: number) => ({
              authors: {
                connect: {
                  id: authorId,
                },
              },
            })),
          },
          interestlevels: {
            connect: {
              id: parseInt(body.interestLevel, 10),
            },
          },
          comments: {
            create: {
              comment: body.comment,
            },
          },
        },
      });

      return newLink;
    }
  };
}

export default LinkService;
