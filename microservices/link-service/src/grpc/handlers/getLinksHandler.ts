import { changingOutputListOfUsers } from "../../utils/changingOutputListOfLinks";
import LinksService from "../../services/LinksService";

const getLinksHandler = async (call: any) => {
  console.log("Запрошенные все ссылки");

  const linkService = new LinksService();

  const linksList: any = await linkService.getAllLinks();

  linksList.forEach((link: any) => {
    call.write(link);
  });

  call.end();
};

export default getLinksHandler;
