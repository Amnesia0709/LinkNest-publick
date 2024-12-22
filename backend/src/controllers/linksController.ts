import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const packageDefinition = protoLoader.loadSync("./src/proto/simple.proto", {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

const protoDescription = grpc.loadPackageDefinition(packageDefinition) as any;
const LinksService = protoDescription.links.LinksService;

const client = new LinksService(
  `${process.env.GRPC_DOMAIN}:${process.env.GRPC_PORT}`,
  grpc.credentials.createInsecure(),
);

export const sendLinkToGrpc = (req: Request, res: Response) => {
  const { url, title, comment, categories, interestLevel, authors } = req.body;

  client.AddLink(
    { url, title, comment, categories, interestLevel, authors },
    (error: any, response: any) => {
      if (error) {
        console.error(`Ошибка gRPC: ${error}`);
        return res.status(500).json({
          error: `Ошибка обработки данных через gRPC`,
        });
      }

      res.status(200).json({
        message: response.status,
      });
    },
  );
};

export const getLinksToGrpc = (req: Request, res: Response) => {
  const links: any[] = [];
  const linksList = client.GetLinks({});

  linksList.on("data", (link: any) => {
    links.push(link);
  });

  linksList.on("end", () => {
    console.log("Передача данных закончена");
    return res.status(200).json({
      data: links.map((link) => ({
        id: link.id,
        title: link.title,
        url: link.url,
        comments: link.comments,
        categories: link.categories,
        interestLevel: link.interestLevel,
        authors: link.authors,
      })),
    });
  });

  linksList.on("error", (error: any) => {
    console.log(`Ошибка при получение данных: ${error}`);
    return res.status(500).json({
      error: `Ошибка при получение данных`,
    });
  });
};
