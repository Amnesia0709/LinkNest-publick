import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import addLinkHandler from "./handlers/addLinkHandler";
import getLinksHandler from "./handlers/getLinksHandler";

const packageDefinition = protoLoader.loadSync("./src/proto/simple.proto", {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

const PORT = 50051;

const protoDescription = grpc.loadPackageDefinition(packageDefinition) as any;
const LinksService = protoDescription.links.LinksService;

const server = new grpc.Server();

server.addService(LinksService.service, {
  AddLink: addLinkHandler,
  GetLinks: getLinksHandler,
});

const startServer = (): void => {
  console.log(`gRPC сервер запущен на порту 0.0.0.0:${PORT}`);
  server.bindAsync(
    `0.0.0.0:${PORT}`,
    grpc.ServerCredentials.createInsecure(),
    (error: Error | null, port: number) => {
      if (error) {
        console.error("Ошибка при привязке сервера:", error);
        return;
      }
      console.log(`gRPC сервер запущен на порту localhost:${port}`);
      server.start();
    },
  );
};

export default startServer;
