import grpc from "@grpc/grpc-js";
import { ILink } from "../../interface/Link";
import LinksService from "../../services/LinksService";

const addLinkHandler = (
  call: grpc.ServerUnaryCall<ILink, any>,
  callback: grpc.sendUnaryData<any>,
) => {
  const { url, title, comment, categories, interestLevel, authors } =
    call.request;

  const body: ILink = {
    url,
    title,
    comment,
    categories,
    interestLevel,
    authors,
  };

  console.log(body)

  const linkService = new LinksService();

  try {
    callback(null, { status: 'success' });
    return linkService.createLink(body);
  } catch (error) {
    console.error(error);
  }
};

export default addLinkHandler;
