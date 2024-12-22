import { links } from "@prisma/client";

export const changingOutputListOfUsers = (usersList: any) => {
  return usersList.map((link: any) => ({
    id: link.id,
    url: link.url,
    title: link.title,
    date_added: link.date_added,
    interestLevel: String(link.interestlevels.interest_level),
    comments: link.comments.map((comment: string) => comment.comment),
    authors: link.linksauthors.map(
      (linkAuthor: string) => linkAuthor.authors.author,
    ),
    categories: link.linkscategories.map(
      (linkCategory: string) => linkCategory.categories.name,
    ),
  }));
};
