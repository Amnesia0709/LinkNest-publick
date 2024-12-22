import prisma from "../database/prisma";

const checkComment = async (linkId: number, comment: string) => {
  const isDuplicateComments = await prisma.comments.findMany({
    where: {
      comment: comment,
      link_id: linkId,
    },
    select: {
      comment: true,
      link_id: true,
    },
  });

  return !!isDuplicateComments.length;
};

const createCommentIfExists = async (link: string, comment: string) => {
  const linkId = await prisma.links.findUnique({
    where: {
      url: link,
    },
    select: {
      id: true,
    },
  });

  const isDuplicate = await checkComment(linkId.id, comment);

  if (!isDuplicate) {
    return prisma.comments.create({
      data: {
        comment: comment,
        link_id: linkId.id,
      },
    });
  } else {
    return "Такой комментарий уже есть";
  }
};

export default createCommentIfExists;
